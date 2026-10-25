// Ali Fabrication concept: motion mode, header menu, quotation form hand-off, scroll reveals, stats count-up, header blur, hero parallax.
// Loaded in <head> without defer so the mode classes are set before first paint.
(function () {
  var root = document.documentElement;
  var reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Full motion unless the OS asks to reduce it; reduced mode keeps opacity fades and the count-up
  function applyMotionMode() {
    root.classList.toggle('motion-full', !reduceQuery.matches);
    root.classList.toggle('motion-reduced', reduceQuery.matches);
  }
  root.classList.add('js');
  applyMotionMode();
  reduceQuery.addEventListener('change', applyMotionMode);

  document.addEventListener('DOMContentLoaded', function () {
    // Header menu
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.getElementById('site-nav');
    if (toggle && nav) {
      var setOpen = function (open) {
        toggle.setAttribute('aria-expanded', String(open));
        nav.classList.toggle('is-open', open);
      };
      toggle.addEventListener('click', function () {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
      });
      // Close after choosing a link, and on Escape (focus returns to the toggle)
      nav.addEventListener('click', function (e) {
        if (e.target.closest('a')) setOpen(false);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          setOpen(false);
          toggle.focus();
        }
      });
      // Reset when the viewport grows past the collapse breakpoint
      window.matchMedia('(min-width: 1100px)').addEventListener('change', function (mq) {
        if (mq.matches) setOpen(false);
      });
    }

    // Quotation form (FR-030…FR-038): validate, then hand off to WhatsApp or email. Nothing is sent or stored here.
    var form = document.getElementById('quote-form');
    if (form) {
      var status = form.querySelector('.quote-form__status');
      var checks = {
        'f-name': function (v) { return v.trim().length >= 2 ? '' : 'Enter your name or company (at least 2 characters).'; },
        'f-phone': function (v) {
          var digits = v.replace(/[\s()\-]/g, '').replace(/^\+/, '');
          return /^\d{9,15}$/.test(digits) ? '' : 'Enter a phone number with 9 to 15 digits, including the country code.';
        }
      };
      var showErrors = false; // after the first failed submit, fields re-check on blur

      var validate = function (input) {
        var message = checks[input.id](input.value);
        var error = document.getElementById(input.id + '-error');
        if (message) {
          if (!error) {
            error = document.createElement('p');
            error.className = 'field__error';
            error.id = input.id + '-error';
            input.parentNode.appendChild(error);
          }
          error.textContent = message;
          input.setAttribute('aria-invalid', 'true');
          input.setAttribute('aria-describedby', error.id);
        } else if (error) {
          error.remove();
          input.removeAttribute('aria-invalid');
          input.removeAttribute('aria-describedby');
        }
        return !message;
      };
      Object.keys(checks).forEach(function (id) {
        document.getElementById(id).addEventListener('blur', function (e) { if (showErrors) validate(e.target); });
      });

      var lastButton = null; // fallback for browsers without SubmitEvent.submitter
      form.querySelectorAll('button[type="submit"]').forEach(function (b) {
        b.addEventListener('click', function () { lastButton = b; });
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var invalid = Object.keys(checks).map(function (id) { return document.getElementById(id); })
          .filter(function (input) { return !validate(input); });
        if (invalid.length) {
          showErrors = true;
          status.textContent = '';
          invalid[0].focus();
          return;
        }
        var value = function (name) { return form.elements[name].value.trim(); };
        var service = value('service');
        var lines = ['Quotation request', 'Name: ' + value('name'), 'Phone: ' + value('phone'), 'Service: ' + service];
        if (value('location')) lines.push('Location: ' + value('location'));
        if (value('details')) lines.push('Details: ' + value('details'));
        var body = lines.join('\n');

        var viaEmail = ((e.submitter || lastButton || {}).value) === 'email';
        var url = viaEmail
          ? 'mailto:info.alifab@gmail.com?subject=' + encodeURIComponent('Quotation request: ' + service) + '&body=' + encodeURIComponent(body)
          : 'https://wa.me/254721691786?text=' + encodeURIComponent(body);

        // Status text is built with text nodes only (FR-038) and never claims the request was received (FR-035)
        var app = viaEmail ? 'your email app' : 'WhatsApp';
        var fallback = document.createElement('a');
        fallback.href = url;
        fallback.textContent = viaEmail ? 'Open the email' : 'Open WhatsApp';
        if (!viaEmail) { fallback.target = '_blank'; fallback.rel = 'noopener noreferrer'; }
        status.textContent = 'Your message is ready in ' + app + '. Press send there to reach Ali Fabrication. Nothing opened? ';
        status.appendChild(fallback);
        status.appendChild(document.createTextNode('.'));

        if (viaEmail) window.location.href = url;
        else window.open(url, '_blank', 'noopener');
      });
    }

    // Header blur and hero parallax, one rAF per scroll
    var header = document.querySelector('.site-header');
    var panel = document.querySelector('.hero-panel');
    var media = panel && panel.querySelector('.hero-panel__media');
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
        if (!media) return;
        if (reduceQuery.matches) { media.style.removeProperty('--parallax'); return; }
        var rect = panel.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        // Image drifts up to ±40 px against the scroll, never past the media layer's 7% overscan at each edge
        // (on narrow panels 7% is under 40 px, and a larger drift showed the panel background)
        var offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -0.08;
        var limit = Math.min(40, rect.height * 0.07);
        media.style.setProperty('--parallax', Math.max(-limit, Math.min(limit, offset)).toFixed(1) + 'px');
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    if (!('IntersectionObserver' in window)) return; // everything stays visible in its final state

    // Count-up: about 1.4 s, ease-out (runs in both modes); the final value is already in the HTML
    function countUp(el) {
      var target = Number(el.getAttribute('data-count'));
      var start = null;
      function frame(now) {
        if (start === null) start = now;
        var t = Math.min((now - start) / 1400, 1);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    // Stats cards: release bars, gold line and range markers once at 30% visibility
    document.querySelectorAll('[data-count]').forEach(function (el) { el.textContent = '0'; });
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-inview');
        entry.target.querySelectorAll('[data-count]').forEach(countUp);
        statsObserver.unobserve(entry.target);
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('[data-reveal]').forEach(function (card) { statsObserver.observe(card); });

    // Scroll reveals for section heads, cards, rows and columns, staggered within each group
    var targets = '.section-head, .card, .pillar, .projects__intro, .project-table tbody tr, .step, .quote__intro, .quote-form, .site-footer__grid';
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-inview');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(targets).forEach(function (el) {
      var index = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.classList.add('reveal');
      el.style.setProperty('--d', Math.min(index, 4) * 90 + 'ms');
      revealObserver.observe(el);
    });
  });
})();
