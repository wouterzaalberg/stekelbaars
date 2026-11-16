/* ============================================
   HOME v2 — effecten (ombouw 2026)
   Draait naast main.js (die doet nav, .reveal, hotspots, smooth scroll, video).
   ============================================ */
(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- 1. Koppen: woord-voor-woord uit een masker ----------
       Splitst tekst in <span class="hm-word"><span>woord</span></span>.
       <br> blijft staan; de tekst zelf blijft gewoon in de HTML (SEO). */
    document.querySelectorAll('[data-words]').forEach(function (heading) {
        var i = 0;
        (function walk(parent) {
        Array.prototype.slice.call(parent.childNodes).forEach(function (node) {
            if (node.nodeType === 1) {
                // geneste elementen ook splitsen; <br> en aria-hidden decoratie niet
                if (!node.matches('br, [aria-hidden="true"]')) walk(node);
                return;
            }
            if (node.nodeType !== 3 || !node.textContent.trim()) return;
            var frag = document.createDocumentFragment();
            node.textContent.split(/(\s+)/).forEach(function (part) {
                if (!part) return;
                if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
                var outer = document.createElement('span');
                outer.className = 'hm-word';
                var inner = document.createElement('span');
                inner.textContent = part;
                inner.style.setProperty('--i', i++);
                outer.appendChild(inner);
                frag.appendChild(outer);
            });
            parent.replaceChild(frag, node);
        });
        })(heading);
    });

    /* ---------- 1a. Kop blok 2: letters liggen plat en komen overeind bij het scrollen ----------
       Splitst in woorden (blijven heel bij afbreken) met daarin losse letters.
       Schermlezers krijgen de hele zin via aria-label. */
    var flipLetters = [];
    var flipHeading = document.querySelector('[data-flip]');
    if (flipHeading) {
        var flipText = flipHeading.textContent.replace(/\s+/g, ' ').trim();
        flipHeading.setAttribute('aria-label', flipText);
        flipHeading.textContent = '';
        flipText.split(' ').forEach(function (word, w) {
            if (w > 0) flipHeading.appendChild(document.createTextNode(' '));
            var wordEl = document.createElement('span');
            wordEl.className = 'hm-flip-word';
            wordEl.setAttribute('aria-hidden', 'true');
            word.split('').forEach(function (ch) {
                var l = document.createElement('span');
                l.className = 'hm-flip-letter';
                l.textContent = ch;
                wordEl.appendChild(l);
                flipLetters.push(l);
            });
            flipHeading.appendChild(wordEl);
        });
    }

    /* ---------- 1b. Hotspots (main.js) opnieuw positioneren zodra de lazy foto binnen is ---------- */
    var duoImg = document.querySelector('.hm-duo-img');
    if (duoImg && !duoImg.complete) {
        duoImg.addEventListener('load', function () {
            window.dispatchEvent(new Event('resize'));
        }, { once: true });
    }

    /* ---------- 2. Eén observer voor alle "is-in" triggers ---------- */
    var inTargets = document.querySelectorAll('[data-words], .hm-duo-photo, .ph-photo, .pg-dienst');
    if (reduceMotion || !('IntersectionObserver' in window)) {
        inTargets.forEach(function (el) { el.classList.add('is-in'); });
    } else {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-in');
                io.unobserve(entry.target);
            });
        }, { threshold: 0.25, rootMargin: '0px 0px -8% 0px' });
        inTargets.forEach(function (el) { io.observe(el); });
    }

    /* ---------- 3. Logo-band: set dupliceren voor een naadloze loop ---------- */
    document.querySelectorAll('[data-marquee]').forEach(function (marquee) {
        if (reduceMotion) return;
        var track = marquee.querySelector('.hm-marquee-track');
        if (!track) return;
        Array.prototype.slice.call(track.children).forEach(function (li) {
            var clone = li.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            clone.querySelectorAll('a').forEach(function (a) { a.setAttribute('tabindex', '-1'); });
            track.appendChild(clone);
        });
        // Snelheid constant houden ongeacht het aantal logo's (~45px per seconde)
        var setWidth = track.scrollWidth / 2;
        track.style.setProperty('--hm-marquee-duration', Math.max(20, setWidth / 45) + 's');
        marquee.classList.add('is-running');
    });

    if (reduceMotion) return;

    /* ---------- 4. Scroll-gekoppelde effecten (één rAF-lus) ---------- */
    var aanpakImg = document.querySelector('.hm-aanpak-photo img');

    // Voortgang van een element door de viewport: 0 = komt onderin binnen, 1 = verlaat bovenin
    function progress(el) {
        var r = el.getBoundingClientRect();
        var vh = window.innerHeight;
        return Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)));
    }

    var ticking = false;

    // Timing kop blok 2: start als de kop onderin het beeld komt (bovenkant op 92% van de
    // viewport), klaar als hij net boven het midden staat (45%). ≈ een halve schermhoogte scroll.
    var FLIP_START = 0.92, FLIP_END = 0.45;
    var FLIP_SPREAD = 0.6;  // deel van de scroll waarover de starts van de letters verspreid zijn
    var FLIP_EACH = 1 - FLIP_SPREAD; // hoe lang één letter erover doet

    function updateFlip() {
        if (!flipLetters.length) return;
        var vh = window.innerHeight;
        var top = flipHeading.getBoundingClientRect().top;
        var p = (FLIP_START * vh - top) / ((FLIP_START - FLIP_END) * vh);
        p = Math.max(0, Math.min(1, p));
        var n = flipLetters.length;
        for (var k = 0; k < n; k++) {
            var start = n > 1 ? (k / (n - 1)) * FLIP_SPREAD : 0;
            var t = Math.max(0, Math.min(1, (p - start) / FLIP_EACH));
            var e = 1 - Math.pow(1 - t, 3); // ease-out: komt vlot omhoog, landt zacht
            var angle = 90 * (1 - e);
            flipLetters[k].style.transform = angle < 0.05 ? 'none' : 'perspective(600px) rotateX(' + angle.toFixed(2) + 'deg)';
        }
    }

    function update() {
        ticking = false;

        updateFlip();

        // Blok 5: rustige parallax op de foto
        if (aanpakImg) {
            var q = progress(aanpakImg.parentElement);
            aanpakImg.style.transform = 'translate3d(0,' + ((0.5 - q) * 10).toFixed(2) + '%,0)';
        }
    }

    function requestTick() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);
    requestTick();
})();
