/* ============================================
   STEKELBAARS - Main JS
   ============================================ */

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelectorAll('.stroom-heading').forEach(el => observer.observe(el));
document.querySelectorAll('.vb-title').forEach(el => observer.observe(el));
document.querySelectorAll('.wie-intro-heading').forEach(el => observer.observe(el));
document.querySelectorAll('.contact-animated-heading').forEach(el => observer.observe(el));
document.querySelectorAll('.page-photo-hero-heading').forEach(el => observer.observe(el));

// Sectie 3 (methode): stapsgewijze inset-expansie tijdens scroll-in (4 stappen)
(function() {
    const section = document.querySelector('.section-methode-v2');
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        section.style.setProperty('--step', 4);
        return;
    }
    const STEPS = 4;
    const STEP_PX = 95;
    let lastStep = -1;
    function update() {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const distance = vh - rect.top;
        const step = Math.max(0, Math.min(STEPS, Math.floor(distance / STEP_PX)));
        if (step !== lastStep) {
            lastStep = step;
            section.style.setProperty('--step', step);
        }
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
})();

// Section 2 (stroom): X-pattern — kop schuift van links → midden → rechts,
// tekst van rechts → midden → links. Beide faden in tijdens convergentie.
(function() {
    const section = document.querySelector('.section-stroom');
    if (!section) return;
    const heading = section.querySelector('.stroom-heading');
    const tekst = section.querySelector('.stroom-tekst');
    if (!heading || !tekst) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Phase boundaries (over de totale section + viewport scroll-doorgang van 0→1)
    const IN_START = 0.10;
    const IN_END = 0.38;
    const HOLD_END = 0.62;
    const OUT_END = 0.85;

    function smoothstep(t) { return t * t * (3 - 2 * t); }

    function update() {
        const rect = section.getBoundingClientRect();
        const sh = rect.height;
        const vh = window.innerHeight;
        const totalRange = sh + vh;
        const scrolled = vh - rect.top;
        const p = Math.max(0, Math.min(1, scrolled / totalRange));

        // Heading: links → midden → rechts (translateX)
        // Tekst+button: rechts → midden op IN, maar OMHOOG (translateY) op OUT
        let headingX, textX, textY, opacity;
        if (p < IN_START) {
            headingX = -100; textX = 100; textY = 0; opacity = 0;
        } else if (p < IN_END) {
            const t = smoothstep((p - IN_START) / (IN_END - IN_START));
            headingX = -100 * (1 - t);
            textX = 100 * (1 - t);
            textY = 0;
            opacity = t;
        } else if (p < HOLD_END) {
            headingX = 0; textX = 0; textY = 0; opacity = 1;
        } else if (p < OUT_END) {
            const t = smoothstep((p - HOLD_END) / (OUT_END - HOLD_END));
            headingX = 100 * t;
            textX = 0;
            textY = -80 * t;
            opacity = 1 - t;
        } else {
            headingX = 100; textX = 0; textY = -80; opacity = 0;
        }

        heading.style.transform = 'translateX(' + headingX.toFixed(2) + '%)';
        heading.style.opacity = opacity.toFixed(3);
        tekst.style.transform = 'translate(' + textX.toFixed(2) + '%, ' + textY.toFixed(2) + '%)';
        tekst.style.opacity = opacity.toFixed(3);
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
})();


// Scroll-linked animations: Section 2 (crossing) + Section 4 (watzoek vissen)
(function() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // --- Section 2: Baars parallax + cursor tracking + idle drift ---
    var stroomSection = document.querySelector('.section-stroom');
    var stroomBaars = document.querySelector('.stroom-baars-bg');
    var baarsMouseX = 0, baarsMouseY = 0;
    var baarsCurrentX = 0, baarsCurrentY = 0;
    var baarsHovering = false;
    var baarsTime = Math.random() * 1000;

    if (stroomSection) {
        stroomSection.addEventListener('mousemove', function(e) {
            var rect = stroomSection.getBoundingClientRect();
            baarsMouseX = (e.clientX - rect.left) / rect.width - 0.5;
            baarsMouseY = (e.clientY - rect.top) / rect.height - 0.5;
            baarsHovering = true;
        });
        stroomSection.addEventListener('mouseleave', function() {
            baarsMouseX = 0;
            baarsMouseY = 0;
            baarsHovering = false;
        });
    }

    // --- Section 4: Watzoek fish ---
    var watzoekSection = document.querySelector('.section-watzoek');
    var watzoekCells = document.querySelectorAll('.watzoek-cell');

    function clamp01(v) { return Math.max(0, Math.min(1, v)); }

    function updateStroom() {
        if (!stroomSection || !stroomBaars) return;
        baarsTime += 0.008;
        var vh = window.innerHeight;
        var rect = stroomSection.getBoundingClientRect();
        var progress = (vh - rect.top) / (vh + stroomSection.offsetHeight);
        var scrollY = (progress - 0.5) * 60;

        // Idle drift — slow sine waves so fish always moves
        var driftX = Math.sin(baarsTime) * 40 + Math.sin(baarsTime * 0.7) * 25;
        var driftY = Math.cos(baarsTime * 0.6) * 20 + Math.sin(baarsTime * 0.4) * 15;

        // Mouse target overrides drift when hovering
        var targetX = baarsHovering ? baarsMouseX : 0;
        var targetY = baarsHovering ? baarsMouseY : 0;

        baarsCurrentX += (targetX - baarsCurrentX) * 0.05;
        baarsCurrentY += (targetY - baarsCurrentY) * 0.05;

        var mx = baarsCurrentX * 120 + driftX;
        var my = baarsCurrentY * 80 + driftY;

        stroomBaars.style.transform = 'translate(calc(-50% + ' + mx.toFixed(2) + 'px), calc(-50% + ' + (scrollY + my).toFixed(2) + 'px))';
    }

    // --- Section 3: (no slide-in, handled separately) ---
    function updateVisie() {}

    // --- Section 4: watzoek fish (scroll-linked move + parallax depth) ---
    function updateWatzoek() {
        if (!watzoekSection || !watzoekCells.length) return;
        var vh = window.innerHeight;
        var wRect = watzoekSection.getBoundingClientRect();
        var sH = watzoekSection.offsetHeight;
        var rawW = 1 - (wRect.top / vh);

        var totalRange = 1 + (sH / vh);
        var wProgress = clamp01((rawW - 0.4) / (totalRange * 0.8));

        // Parallax: 0 when section enters viewport center, negative when scrolling up
        var sectionCenter = wRect.top + sH / 2;
        var parallaxRaw = (sectionCenter - vh / 2) / vh; // -1..1-ish
        // Depth per cell — middle fish moves fastest, sides slower
        var depths = [0.25, 0.45, 0.3];

        watzoekCells.forEach(function(cell, i) {
            var baars = cell.querySelector('.watzoek-baars');
            if (!baars) return;
            var direction = (i === 1) ? 1 : -1;
            var offset = direction * 150 * (1 - 2 * wProgress);
            var parallax = -parallaxRaw * vh * (depths[i] || 0.3);
            var rot = baars.classList.contains('watzoek-baars--flip') ? -90 : 90;
            baars.style.transform = 'translate(-50%, calc(-50% + ' + (offset + parallax).toFixed(1) + 'px)) rotate(' + rot + 'deg) scale(1.3)';
        });
    }

    // --- Team page: baars parallax ---
    var teamBaarzen = document.querySelectorAll('.wie-visie-baars');
    var teamPage = document.querySelector('.team-page');

    function updateTeamBaarzen() {
        if (!teamPage || !teamBaarzen.length) return;
        var rect = teamPage.getBoundingClientRect();
        var vh = window.innerHeight;
        var scrolled = vh - rect.top;
        teamBaarzen.forEach(function(baars, i) {
            var speed = i === 0 ? 0.2 : 0.15;
            var yOffset = scrolled * speed;
            var isLeft = baars.classList.contains('wie-visie-baars--left');
            baars.style.transform = 'translateY(calc(-50% + ' + yOffset.toFixed(1) + 'px))' + (isLeft ? ' scaleX(-1)' : '');
        });
    }

    function onScroll() {
        updateVisie();
        updateWatzoek();
        updateTeamBaarzen();
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll);
    onScroll();

    // Continuous loop for stroom baars (cursor + scroll)
    function stroomLoop() {
        updateStroom();
        requestAnimationFrame(stroomLoop);
    }
    stroomLoop();
})();

// Section 3: Background fade (yellow → white) + snake arrow
(function() {
    var methode = document.querySelector('.section-methode');
    if (!methode) return;

    // --- Background fade (yellow → white) + heading fade (wit → zwart), fast ---
    var methodeHeading = methode.querySelector('.methode-heading');
    function updateMethodeBg() {
        var rect = methode.getBoundingClientRect();
        var vh = window.innerHeight;
        // Fade over ~60% of viewport scroll
        var t = Math.max(0, Math.min(1, (vh - rect.top) / (vh * 0.6)));
        var r = Math.round(254 + t);
        var g = Math.round(219 + 36 * t);
        var b = Math.round(0 + 255 * t);
        methode.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
        // Heading: white → black
        if (methodeHeading) {
            var c = Math.round(255 * (1 - t));
            methodeHeading.style.color = 'rgb(' + c + ',' + c + ',' + c + ')';
        }
    }

    // --- Snake arrow: SVG inside section ---
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.classList.add('methode-arrow-svg');
    methode.appendChild(svg);

    var arcDefs = {
        'right-down': { s: 1, dx: 1, dy: 1 },
        'right-up':   { s: 0, dx: 1, dy: -1 },
        'down-right': { s: 0, dx: 1, dy: 1 },
        'down-left':  { s: 1, dx: -1, dy: 1 },
        'up-right':   { s: 1, dx: 1, dy: -1 },
        'up-left':    { s: 0, dx: -1, dy: -1 },
        'left-down':  { s: 0, dx: -1, dy: 1 },
        'left-up':    { s: 1, dx: -1, dy: -1 },
    };

    function buildSnake(W, H, r, moves) {
        var cx = moves[0].x * W, cy = moves[0].y * H;
        var d = 'M ' + cx + ' ' + cy;
        var lastDir = null;
        for (var i = 1; i < moves.length; i++) {
            var m = moves[i], dir = m.dir;
            if (lastDir && lastDir !== dir) {
                var a = arcDefs[lastDir + '-' + dir];
                if (a) {
                    var ex = cx + a.dx * r, ey = cy + a.dy * r;
                    d += ' A ' + r + ' ' + r + ' 0 0 ' + a.s + ' ' + ex + ' ' + ey;
                    cx = ex; cy = ey;
                }
            }
            if (dir === 'right' || dir === 'left') {
                cx = m.v * W; d += ' H ' + cx;
            } else {
                cy = m.v * H; d += ' V ' + cy;
            }
            lastDir = dir;
        }
        return d;
    }

    var arrowPath, arrowHead, totalLen;
    var sw = 50;

    function initArrow() {
        var W = methode.offsetWidth;
        var H = methode.offsetHeight;
        var r = 35;

        var moves = [
            { dir: 'start', x: -0.03, y: 0.40 },
            { dir: 'right', v: 0.22 },
            { dir: 'down',  v: 0.75 },
            { dir: 'right', v: 0.55 },
            { dir: 'up',    v: 0.25 },
            { dir: 'right', v: 0.78 },
            { dir: 'down',  v: 0.70 },
            { dir: 'right', v: 1.03 },
        ];

        var pathD = buildSnake(W, H, r, moves);

        svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
        svg.setAttribute('preserveAspectRatio', 'none');
        svg.innerHTML = '';

        var headH = sw / 0.30;
        var headW = headH * 2;

        var defs = document.createElementNS(ns, 'defs');
        var chevClip = document.createElementNS(ns, 'clipPath');
        chevClip.setAttribute('id', 'methode-chevron');
        var cRect = document.createElementNS(ns, 'rect');
        cRect.setAttribute('x', (headW * 0.55).toString());
        cRect.setAttribute('y', '0');
        cRect.setAttribute('width', (headW * 0.45).toString());
        cRect.setAttribute('height', headH.toString());
        chevClip.appendChild(cRect);
        defs.appendChild(chevClip);
        svg.appendChild(defs);

        arrowPath = document.createElementNS(ns, 'path');
        arrowPath.setAttribute('d', pathD);
        arrowPath.setAttribute('fill', 'none');
        arrowPath.setAttribute('stroke', '#FEDB00');
        arrowPath.setAttribute('stroke-width', sw.toString());
        arrowPath.setAttribute('stroke-linecap', 'round');
        arrowPath.setAttribute('stroke-linejoin', 'round');
        arrowPath.setAttribute('opacity', '0.25');
        svg.appendChild(arrowPath);

        totalLen = arrowPath.getTotalLength();
        arrowPath.style.strokeDasharray = totalLen;
        arrowPath.style.strokeDashoffset = totalLen;

        arrowHead = document.createElementNS(ns, 'image');
        arrowHead.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'Huisstijl/stekelbaars_pijl_dik.png');
        arrowHead.setAttribute('width', headW);
        arrowHead.setAttribute('height', headH);
        arrowHead.setAttribute('opacity', '0.4');
        arrowHead.setAttribute('clip-path', 'url(#methode-chevron)');
        arrowHead.style.display = 'none';
        svg.appendChild(arrowHead);
    }

    function updateArrow() {
        if (!arrowPath || !totalLen) return;
        var rect = methode.getBoundingClientRect();
        var vh = window.innerHeight;
        // Arrow draws over full scroll range: from entering viewport to almost scrolled past
        var sH = methode.offsetHeight;
        var scrollRange = vh + sH * 0.85;
        var progress = Math.max(0, Math.min(1, (vh - rect.top) / scrollRange));

        var drawLen = progress * totalLen;
        arrowPath.style.strokeDashoffset = (totalLen - drawLen).toFixed(1);

        if (drawLen > 5) {
            var pt = arrowPath.getPointAtLength(drawLen);
            var sampleDist = Math.min(drawLen, 50);
            var pt2 = arrowPath.getPointAtLength(drawLen - sampleDist);
            var angle = Math.atan2(pt.y - pt2.y, pt.x - pt2.x) * 180 / Math.PI;

            var headH = sw / 0.30;
            var headW = headH * 2;
            arrowHead.setAttribute('transform',
                'translate(' + pt.x.toFixed(1) + ',' + pt.y.toFixed(1) + ') rotate(' + angle.toFixed(1) + ') translate(' + (-headW * 0.55) + ',' + (-headH / 2) + ')');
            arrowHead.style.display = '';
        } else {
            arrowHead.style.display = 'none';
        }
    }

    function onScroll() {
        updateMethodeBg();
        updateArrow();
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', function() { initArrow(); onScroll(); });
    window.addEventListener('load', function() { initArrow(); onScroll(); });
    initArrow();
    onScroll();
})();

// Navigation scroll behavior
const nav = document.querySelector('.nav');
if (nav) {
    function updateNav() {
        if (window.scrollY > 50) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
    }
    // Apply immediately on load to prevent yellow flash
    updateNav();
    // Enable transitions only after initial state is set
    requestAnimationFrame(() => nav.classList.add('nav--ready'));
    window.addEventListener('scroll', updateNav);
}

// Mobile menu toggle
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');

if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('open');
        document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

// Kinetic smooth scrolling
(function() {
    let targetScroll = window.scrollY;
    let currentScroll = window.scrollY;
    let animating = false;
    const ease = 0.08; // lower = smoother/slower glide

    function animate() {
        const diff = targetScroll - currentScroll;

        if (Math.abs(diff) < 0.5) {
            currentScroll = targetScroll;
            window.scrollTo(0, currentScroll);
            animating = false;
            return;
        }

        currentScroll += diff * ease;
        window.scrollTo(0, currentScroll);
        requestAnimationFrame(animate);
    }

    // Only apply on desktop (not touch devices)
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouch) {
        window.addEventListener('wheel', (e) => {
            e.preventDefault();

            // Accumulate scroll target
            targetScroll += e.deltaY;

            // Clamp to page bounds
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

            if (!animating) {
                animating = true;
                currentScroll = window.scrollY;
                requestAnimationFrame(animate);
            }
        }, { passive: false });

        // Sync on resize
        window.addEventListener('resize', () => {
            targetScroll = window.scrollY;
            currentScroll = window.scrollY;
        });
    }
})();

// (Stroom flowing bars removed — section redesigned)

// Legacy guard: skip if element not found
(function() {
    var container = document.getElementById('stroom-bars');
    if (!container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var section = container.closest('.visie-split-right') || container.closest('.section-visie');
    var MAX_BARS = 35;
    var MOUSE_RADIUS = 200;
    var SPAWN_INTERVAL = 1500;
    var bars = [];
    var mouseX = -9999, mouseY = -9999;
    var smoothMouseX = -9999, smoothMouseY = -9999;
    var lastSpawn = 0;
    var running = false;

    section.addEventListener('mousemove', function(e) {
        var r = container.getBoundingClientRect();
        mouseX = e.clientX - r.left;
        mouseY = e.clientY - r.top;
    });
    section.addEventListener('mouseleave', function() {
        mouseX = -9999;
        mouseY = -9999;
    });

    function makeEl() {
        var el = document.createElement('div');
        el.className = 'stroom-bar';
        container.appendChild(el);
        return el;
    }

    function spawn(x, y, vx, vy, drift, instant) {
        if (bars.length >= MAX_BARS) return;
        bars.push({
            el: makeEl(),
            x: x, y: y,
            vx: vx || 0.8 + Math.random() * 0.6,
            vy: vy || 0,
            drift: drift !== undefined ? drift : (Math.random() - 0.5) * 0.8,
            rot: (Math.random() - 0.5) * 10,
            baseOp: 0.15 + Math.random() * 0.12,
            canSplit: true,
            splitCount: 0,
            fade: instant ? 1 : 0,
            stopped: false
        });
    }

    // Pre-populate: bars spread across the screen (looks mid-animation)
    function seed() {
        var cw = section.offsetWidth;
        var ch = section.offsetHeight;
        var midY = ch * 0.5;
        for (var i = 0; i < 18; i++) {
            var xProgress = Math.random();
            var x = xProgress * cw * 0.85;
            var spread = 0.15 + xProgress * 0.7;
            var y = midY + (Math.random() - 0.5) * ch * spread;
            var drift = (Math.random() - 0.5) * 0.8;
            spawn(x, y, 0.8 + Math.random() * 0.6, 0, drift, true);
        }
    }

    function tick(t) {
        if (!running) return;
        var cw = section.offsetWidth;
        var ch = section.offsetHeight;
        var midY = ch * 0.5;

        if (mouseX > -9000) {
            smoothMouseX += (mouseX - smoothMouseX) * 0.12;
            smoothMouseY += (mouseY - smoothMouseY) * 0.12;
        } else {
            smoothMouseX = -9999;
            smoothMouseY = -9999;
        }

        // Spawn bars from left with wider band
        if (t - lastSpawn > SPAWN_INTERVAL && bars.length < MAX_BARS) {
            var spawnY = midY + (Math.random() - 0.5) * ch * 0.1;
            spawn(-160, spawnY, 0.8 + Math.random() * 0.6, 0, (Math.random() - 0.5) * 0.8);
            lastSpawn = t;
        }

        for (var i = bars.length - 1; i >= 0; i--) {
            var b = bars[i];
            if (b.stopped) continue;

            var progress = Math.max(0, b.x / cw);

            // Fan out more gradually — reaches full spread at right edge
            var fanProgress = Math.max(0, progress);
            b.vy += b.drift * fanProgress * 0.04;
            b.vy *= 0.988;

            // Mouse repulsion
            var cx = b.x + 75;
            var cy = b.y + 10;
            var dx = cx - smoothMouseX;
            var dy = cy - smoothMouseY;
            var d = Math.sqrt(dx * dx + dy * dy);
            if (d < MOUSE_RADIUS && d > 1) {
                var f = (MOUSE_RADIUS - d) / MOUSE_RADIUS;
                f = f * f * f * 6;
                b.vx += (dx / d) * f * 0.08;
                b.vy += (dy / d) * f * 0.08;
                b.rot += (dy > 0 ? 1 : -1) * f * 0.15;
            }

            b.x += b.vx;
            b.y += b.vy;
            b.vx += (1.0 - b.vx) * 0.01;
            b.rot *= 0.96;
            if (b.fade < 1) b.fade = Math.min(b.fade + 0.03, 1);

            // Cell division — max 1 split per bar
            if (b.canSplit && b.splitCount < 1 && b.x > cw * 0.15 && b.x < cw * 0.75) {
                if (Math.random() < 0.004) {
                    b.splitCount = 1;
                    b.canSplit = false;
                    var spread = 8 + Math.random() * 14;
                    spawn(b.x + 5, b.y + spread, b.vx, b.vy + 0.2, b.drift + 0.3, true);
                }
            }

            // Recycle at right edge — wrap back to left so animation never stops
            if (b.x > cw + 160) {
                b.x = -160;
                b.y = midY + (Math.random() - 0.5) * ch * 0.25;
                b.vx = 0.8 + Math.random() * 0.6;
                b.vy = 0;
                b.drift = (Math.random() - 0.5) * 0.8;
                b.rot = (Math.random() - 0.5) * 10;
            }

            // Clamp vertical to prevent going too far off (but keep visible)
            if (b.y < -50) { b.y = -50; b.vy = Math.abs(b.vy) * 0.5; }
            if (b.y > ch + 50) { b.y = ch + 50; b.vy = -Math.abs(b.vy) * 0.5; }

            b.el.style.opacity = b.baseOp * b.fade;
            b.el.style.transform = 'translate(' + b.x.toFixed(1) + 'px,' + b.y.toFixed(1) + 'px) rotate(' + b.rot.toFixed(1) + 'deg)';
        }

        requestAnimationFrame(tick);
    }

    var visObs = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            if (!running) {
                running = true;
                if (bars.length === 0) seed();
                requestAnimationFrame(tick);
            }
        } else {
            running = false;
        }
    }, { rootMargin: '200px' });
    visObs.observe(section);
})();

// Marquee heading: fit font-size to logo width, hover to scroll
(function() {
    var marquee = document.querySelector('.visie-stapel-marquee');
    var logo = document.querySelector('.visie-stapel-logo');
    if (!marquee || !logo) return;

    var firstItem = marquee.querySelector('.visie-stapel-marquee-item');
    if (!firstItem) return;

    function fit() {
        var logoW = logo.offsetWidth;
        if (!logoW) return;
        var lo = 8, hi = 200, mid;
        while (hi - lo > 0.5) {
            mid = (lo + hi) / 2;
            firstItem.style.fontSize = mid + 'px';
            if (firstItem.scrollWidth > logoW) hi = mid;
            else lo = mid;
        }
        var items = marquee.querySelectorAll('.visie-stapel-marquee-item');
        for (var i = 0; i < items.length; i++) items[i].style.fontSize = lo + 'px';
    }

    logo.addEventListener('load', fit);
    if (logo.complete) fit();
    window.addEventListener('resize', fit);

    // JS-driven marquee: scroll left on hover, ease in/out
    var track = marquee.querySelector('.visie-stapel-marquee-track');
    var hovering = false;
    var speed = 0;
    var maxSpeed = 1.5;
    var accel = 0.02;
    var decel = 0.015;
    var offset = 0;
    var running = false;

    // Start at -halfW so text is visible, scroll toward 0 (right), then reset
    function getHalfW() { return track.scrollWidth / 2; }

    var right = marquee.closest('.visie-split-right');
    if (right) {
        right.addEventListener('mouseenter', function() { hovering = true; if (!running) { running = true; tick(); } });
        right.addEventListener('mouseleave', function() { hovering = false; });
    }

    function tick() {
        if (hovering) {
            speed = Math.min(speed + accel, maxSpeed);
        } else {
            speed = Math.max(speed - decel, 0);
        }
        if (speed < 0.001 && !hovering) { running = false; return; }

        offset += speed;
        var halfW = getHalfW();
        if (halfW > 0 && offset >= 0) offset -= halfW;

        track.style.transform = 'translateX(' + offset.toFixed(1) + 'px)';
        requestAnimationFrame(tick);
    }

    // Initialize offset to -halfW
    function initOffset() {
        var halfW = getHalfW();
        if (halfW > 0) offset = -halfW;
    }
    initOffset();
    window.addEventListener('resize', initOffset);
})();

// Align visie-left-content heading to marquee: same vertical position + same font-size
(function() {
    var marquee = document.querySelector('.visie-stapel-marquee');
    var section = document.querySelector('.section-visie');
    var content = document.querySelector('.visie-left-content');
    var heading = content && content.querySelector('.stroom-word');
    var firstItem = marquee && marquee.querySelector('.visie-stapel-marquee-item');
    if (!marquee || !section || !content || !heading || !firstItem) return;

    function align() {
        var sRect = section.getBoundingClientRect();
        var mRect = marquee.getBoundingClientRect();
        var marqueeTop = mRect.top - sRect.top;
        content.style.paddingTop = marqueeTop + 'px';

        var computedSize = window.getComputedStyle(firstItem).fontSize;
        if (computedSize) heading.style.fontSize = computedSize;
    }

    window.addEventListener('load', align);
    window.addEventListener('resize', align);
    setTimeout(align, 100);
})();

// Foto hotspots: position ring relative to original image coords, accounting for object-fit: cover
(function() {
    var hotspots = document.querySelectorAll('.foto-hotspot');
    if (!hotspots.length) return;

    function position() {
        hotspots.forEach(function(hs) {
            var container = hs.parentElement;
            var img = container.querySelector('.wie-split-photo-img') || container.querySelector('img');
            if (!img || !img.naturalWidth) return;

            var ringX = parseFloat(hs.dataset.ringX);
            var ringY = parseFloat(hs.dataset.ringY);

            var cw = container.offsetWidth;
            var ch = container.offsetHeight;
            var nw = img.naturalWidth;
            var nh = img.naturalHeight;

            var containerRatio = cw / ch;
            var imageRatio = nw / nh;

            var displayW, displayH, offsetX, offsetY;

            if (containerRatio > imageRatio) {
                displayW = cw;
                displayH = cw / imageRatio;
                offsetX = 0;
                offsetY = (ch - displayH) / 2;
            } else {
                displayH = ch;
                displayW = ch * imageRatio;
                offsetX = (cw - displayW) / 2;
                offsetY = 0;
            }

            // Position in container coords
            var px = offsetX + ringX * displayW;
            var py = offsetY + ringY * displayH;

            // Offset by hotspot zone position within container
            var hsLeft = hs.offsetLeft;
            var hsTop = hs.offsetTop;

            var ring = hs.querySelector('.foto-hotspot-ring');
            var naam = hs.querySelector('.foto-hotspot-naam');
            var ringW = ring ? ring.offsetWidth : 0;
            var ringH = ring ? ring.offsetHeight : 0;

            if (ring) {
                ring.style.left = (px - hsLeft - ringW / 2) + 'px';
                ring.style.top = (py - hsTop - ringH / 2) + 'px';
            }
            if (naam) {
                naam.style.left = (px - hsLeft - ringW / 2) + 'px';
                naam.style.top = (py - hsTop + ringH / 2 + 8) + 'px';
            }
        });
    }

    window.addEventListener('load', position);
    window.addEventListener('resize', position);
    position();
})();

// Diensten page: number → fish flip when dienst-row passes viewport center
(function() {
    const rows = document.querySelectorAll('.dienst-row');
    if (!rows.length) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    function update() {
        const vh = window.innerHeight;
        const viewCenter = vh / 2;
        const zone = vh * 0.25; // max afstand tot viewport-midden voor een flip
        let closestRow = null;
        let closestDist = Infinity;
        rows.forEach(row => {
            const rect = row.getBoundingClientRect();
            const rowCenter = rect.top + rect.height / 2;
            const dist = Math.abs(rowCenter - viewCenter);
            if (dist < closestDist) {
                closestDist = dist;
                closestRow = row;
            }
        });
        rows.forEach(row => {
            if (row === closestRow && closestDist < zone) {
                row.classList.add('is-fish');
            } else {
                row.classList.remove('is-fish');
            }
        });
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
})();

// Smooth scroll for anchor links (e.g. #contact)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Model page: kinetic horizontal scroll
const modelScroll = document.querySelector('.model-horizontal');
if (modelScroll) {
    const dots = document.querySelectorAll('.model-flow-dot');

    const scrollHint = document.querySelector('.model-scroll-hint');

    const slides = modelScroll.querySelectorAll('.model-slide');

    const updateActive = () => {
        const scrollLeft = modelScroll.scrollLeft;
        const viewportW = modelScroll.offsetWidth;
        const centerX = scrollLeft + viewportW / 2;

        let activeIndex = 0;
        let minDist = Infinity;
        slides.forEach((slide, i) => {
            const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
            const dist = Math.abs(slideCenter - centerX);
            if (dist < minDist) {
                minDist = dist;
                activeIndex = i;
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIndex);
        });
        slides.forEach((slide, i) => {
            slide.classList.toggle('is-active', i === activeIndex);
        });

        // Yellow-bg slides: indicator switches color so dots stay visible
        const activeSlide = slides[activeIndex];
        const indicator = document.querySelector('.model-flow-indicator');
        if (indicator && activeSlide) {
            const isYellow = !activeSlide.classList.contains('model-slide--photo-bg')
                && !activeSlide.classList.contains('model-slide--intro')
                && (activeIndex % 2 === 1);
            indicator.classList.toggle('on-yellow', isYellow);
        }

        if (scrollHint) {
            scrollHint.style.opacity = scrollLeft > viewportW * 0.3 ? '0' : '';
        }
    };

    modelScroll.addEventListener('scroll', updateActive);
    // Trigger initial state (intro slide animates in on page load)
    updateActive();
    window.addEventListener('load', updateActive);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            modelScroll.scrollBy({ left: 300, behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft') {
            modelScroll.scrollBy({ left: -300, behavior: 'smooth' });
        }
    });

    // Kinetic smooth horizontal scroll from mouse wheel
    let targetLeft = modelScroll.scrollLeft;
    let currentLeft = modelScroll.scrollLeft;
    let scrolling = false;
    const scrollEase = 0.08;

    function animateScroll() {
        const diff = targetLeft - currentLeft;

        if (Math.abs(diff) < 0.5) {
            currentLeft = targetLeft;
            modelScroll.scrollLeft = currentLeft;
            scrolling = false;
            return;
        }

        currentLeft += diff * scrollEase;
        modelScroll.scrollLeft = currentLeft;
        requestAnimationFrame(animateScroll);
    }

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouch) {
        modelScroll.addEventListener('wheel', (e) => {
            e.preventDefault();

            // Map vertical wheel to horizontal movement
            targetLeft += e.deltaY;

            // Clamp to scroll bounds
            const maxLeft = modelScroll.scrollWidth - modelScroll.offsetWidth;
            targetLeft = Math.max(0, Math.min(targetLeft, maxLeft));

            if (!scrolling) {
                scrolling = true;
                currentLeft = modelScroll.scrollLeft;
                requestAnimationFrame(animateScroll);
            }
        }, { passive: false });
    }

    // Sync on manual scroll (drag, touch)
    modelScroll.addEventListener('scroll', () => {
        if (!scrolling) {
            targetLeft = modelScroll.scrollLeft;
            currentLeft = modelScroll.scrollLeft;
        }
    });
}

// Model page: snake arrow background
(function() {
    var modelPage = document.querySelector('.model-page');
    var modelScroll = document.querySelector('.model-horizontal');
    if (!modelPage || !modelScroll) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Arc lookup for all 8 direction transitions
    var arcDefs = {
        'right-down': { s: 1, dx: 1, dy: 1 },
        'right-up':   { s: 0, dx: 1, dy: -1 },
        'down-right': { s: 0, dx: 1, dy: 1 },
        'down-left':  { s: 1, dx: -1, dy: 1 },
        'up-right':   { s: 1, dx: 1, dy: -1 },
        'up-left':    { s: 0, dx: -1, dy: -1 },
        'left-down':  { s: 0, dx: -1, dy: 1 },
        'left-up':    { s: 1, dx: -1, dy: -1 },
    };

    // Build snake path from move sequence (supports all 4 directions incl. backward)
    function buildSnake(W, H, r, moves) {
        var cx = moves[0].x * W, cy = moves[0].y * H;
        var d = 'M ' + cx + ' ' + cy;
        var lastDir = null;

        for (var i = 1; i < moves.length; i++) {
            var m = moves[i];
            var dir = m.dir;

            if (lastDir && lastDir !== dir) {
                var a = arcDefs[lastDir + '-' + dir];
                var ex = cx + a.dx * r, ey = cy + a.dy * r;
                d += ' A ' + r + ' ' + r + ' 0 0 ' + a.s + ' ' + ex + ' ' + ey;
                cx = ex; cy = ey;
            }

            if (dir === 'right' || dir === 'left') {
                cx = m.v * W; d += ' H ' + cx;
            } else {
                cy = m.v * H; d += ' V ' + cy;
            }
            lastDir = dir;
        }
        return d;
    }

    function init() {
        var W = modelScroll.scrollWidth;
        var H = modelScroll.offsetHeight;
        var r = Math.min(120, H * 0.13);

        // Two arrows with different routes
        var moves1 = [
            { dir: 'start', x: 0.085, y: 0.58 },
            { dir: 'right', v: 0.17 },
            { dir: 'up',    v: 0.35 },
            { dir: 'right', v: 0.25 },
            { dir: 'down',  v: 0.58 },
            { dir: 'right', v: 0.32 },
            { dir: 'up',    v: 0.40 },
            { dir: 'right', v: 0.39 },
            { dir: 'down',  v: 0.55 },
            { dir: 'right', v: 0.46 },
            { dir: 'up',    v: 0.32 },
            { dir: 'left',  v: 0.41 },
            { dir: 'down',  v: 0.50 },
            { dir: 'right', v: 0.54 },
            { dir: 'down',  v: 0.65 },
            { dir: 'right', v: 0.62 },
            { dir: 'up',    v: 0.38 },
            { dir: 'right', v: 0.70 },
            { dir: 'down',  v: 0.60 },
            { dir: 'right', v: 0.77 },
            { dir: 'up',    v: 0.42 },
            { dir: 'right', v: 0.85 },
            { dir: 'down',  v: 0.55 },
            { dir: 'right', v: 0.97 },
        ];

        var d1 = buildSnake(W, H, r, moves1);
        var slideW = W / 7;

        // Create SVG
        var ns = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(ns, 'svg');
        svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
        svg.style.cssText = 'position:absolute;top:0;left:0;width:' + W + 'px;height:100%;z-index:0;pointer-events:none;';

        // Clip paths for slide backgrounds
        var defs = document.createElementNS(ns, 'defs');
        var clipBlack = document.createElementNS(ns, 'clipPath');
        clipBlack.setAttribute('id', 'clip-black');
        var clipYellow = document.createElementNS(ns, 'clipPath');
        clipYellow.setAttribute('id', 'clip-yellow');
        var slideEls = modelScroll.querySelectorAll('.model-slide');
        for (var s = 0; s < slideEls.length; s++) {
            var cr = document.createElementNS(ns, 'rect');
            cr.setAttribute('x', slideEls[s].offsetLeft);
            cr.setAttribute('y', 0);
            cr.setAttribute('width', slideEls[s].offsetWidth);
            cr.setAttribute('height', H);
            if (s % 2 === 0) clipBlack.appendChild(cr); else clipYellow.appendChild(cr);
        }
        defs.appendChild(clipBlack);
        defs.appendChild(clipYellow);

        // Chevron clip for PNG-based arrowheads. PNG content: chevron-V begins at
        // ~74% across the image (left of that is just transparent/shaft area).
        var sw = 80;
        var headH = sw / 0.30;
        var headW = headH * 2;
        var chevronClip = document.createElementNS(ns, 'clipPath');
        chevronClip.setAttribute('id', 'chevron-crop');
        var cropRect = document.createElementNS(ns, 'rect');
        cropRect.setAttribute('x', (headW * 0.74).toString());
        cropRect.setAttribute('y', '0');
        cropRect.setAttribute('width', (headW * 0.26).toString());
        cropRect.setAttribute('height', headH.toString());
        chevronClip.appendChild(cropRect);
        defs.appendChild(chevronClip);
        svg.appendChild(defs);

        // Helper: create a full arrow (path + arrowhead, yellow on black + white on yellow)
        function createArrow(pathData) {
            var yp = document.createElementNS(ns, 'path');
            yp.setAttribute('d', pathData);
            yp.setAttribute('fill', 'none');
            yp.setAttribute('stroke', '#FFE980');
            yp.setAttribute('stroke-width', '72.5');
            yp.setAttribute('stroke-linecap', 'butt');
            yp.setAttribute('stroke-linejoin', 'round');
            yp.setAttribute('opacity', '0.3');
            yp.setAttribute('clip-path', 'url(#clip-black)');
            svg.appendChild(yp);

            var wp = document.createElementNS(ns, 'path');
            wp.setAttribute('d', pathData);
            wp.setAttribute('fill', 'none');
            wp.setAttribute('stroke', '#FFFFFF');
            wp.setAttribute('stroke-width', '72.5');
            wp.setAttribute('stroke-linecap', 'butt');
            wp.setAttribute('stroke-linejoin', 'round');
            wp.setAttribute('opacity', '0.3');
            wp.setAttribute('clip-path', 'url(#clip-yellow)');
            svg.appendChild(wp);

            function makeHead(clipId) {
                var g = document.createElementNS(ns, 'g');
                g.setAttribute('clip-path', 'url(#' + clipId + ')');
                g.style.display = 'none';
                var img = document.createElementNS(ns, 'image');
                img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'Huisstijl/stekelbaars_pijl_dik.png');
                img.setAttribute('width', headW);
                img.setAttribute('height', headH);
                img.setAttribute('opacity', '0.3');
                img.setAttribute('clip-path', 'url(#chevron-crop)');
                g.appendChild(img);
                return g;
            }
            var hy = makeHead('clip-black');
            var hw = makeHead('clip-yellow');
            svg.appendChild(hy);
            svg.appendChild(hw);

            var tl = yp.getTotalLength();
            [yp, wp].forEach(function(p) {
                p.style.strokeDasharray = tl;
                p.style.strokeDashoffset = tl;
            });

            return { yp: yp, wp: wp, hy: hy, hw: hw, tl: tl };
        }

        var arrow1 = createArrow(d1);

        modelPage.appendChild(svg);

        function updateArrow(a, drawLength) {
            var tailEnd = Math.max(0, Math.min(drawLength, a.tl));
            var off = (a.tl - tailEnd).toFixed(1);
            a.yp.style.strokeDashoffset = off;
            a.wp.style.strokeDashoffset = off;

            // Position PNG chevron so its BACK edge (left edge of the cropped region,
            // at local headW*0.74, headH/2) lands at the stroke endpoint. Chevron tip
            // then extends forward past ptEnd along the tangent direction.
            var ptEnd = a.yp.getPointAtLength(tailEnd);
            var sampleAt = Math.max(0, tailEnd - 2);
            var ptBehind = a.yp.getPointAtLength(sampleAt);
            var dx = ptEnd.x - ptBehind.x;
            var dy = ptEnd.y - ptBehind.y;
            if (dx === 0 && dy === 0) return;
            var angle = Math.atan2(dy, dx) * 180 / Math.PI;
            var tf = 'translate(' + ptEnd.x.toFixed(1) + ',' + ptEnd.y.toFixed(1) + ') rotate(' + angle.toFixed(1) + ') translate(' + (-headW * 0.74) + ',' + (-headH / 2) + ')';
            a.hy.setAttribute('transform', tf);
            a.hw.setAttribute('transform', tf);
            a.hy.style.display = '';
            a.hw.style.display = '';
        }

        // Snake arrow starts invisible until first scroll, then fades in subtly
        svg.style.opacity = '0';
        svg.style.transition = 'opacity 1.4s ease-out';

        function updateSnake() {
            var scrollLeft = modelScroll.scrollLeft;
            var maxScroll = modelScroll.scrollWidth - modelScroll.offsetWidth;
            var progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;

            svg.style.transform = 'translateX(' + (-scrollLeft) + 'px)';

            // Fade in pas na ~2 scrolls (200px), fade out aan eindpunt
            var fadeIn = scrollLeft > 200 ? 1 : 0;
            var fadeOut = progress < 0.9 ? 1 : Math.max(0, 1 - (progress - 0.9) / 0.1);
            svg.style.opacity = (fadeIn * fadeOut).toFixed(2);

            var baseLength = modelScroll.offsetWidth * 0.25;
            var dl1 = baseLength + progress * (arrow1.tl - baseLength);
            updateArrow(arrow1, dl1);
        }

        modelScroll.addEventListener('scroll', updateSnake);
        updateSnake();
    }

    window.addEventListener('load', init);
})();

// Testimonial slider
(function() {
    var slider = document.querySelector('.testimonial-slider-window');
    var track = document.querySelector('.testimonial-slider-track');
    var prevBtn = document.querySelector('.testimonial-nav--prev');
    var nextBtn = document.querySelector('.testimonial-nav--next');
    if (!slider || !track) return;

    var cards = track.querySelectorAll('.testimonial-card-mini');
    var currentIndex = 0;

    function getCardsPerView() {
        return window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
    }

    function updateCardWidths() {
        var cpv = getCardsPerView();
        var gap = parseFloat(getComputedStyle(track).gap) || 32;
        var cardW = (slider.offsetWidth - gap * (cpv - 1)) / cpv;
        cards.forEach(function(c) {
            c.style.flex = '0 0 ' + cardW + 'px';
            c.style.minWidth = cardW + 'px';
            c.style.maxWidth = cardW + 'px';
        });
    }

    function update() {
        updateCardWidths();
        var cpv = getCardsPerView();
        var maxIndex = Math.max(0, cards.length - cpv);
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        var gap = parseFloat(getComputedStyle(track).gap) || 32;
        var cardW = cards[0] ? cards[0].offsetWidth : 0;
        var offset = currentIndex * (cardW + gap);
        track.style.transform = 'translateX(-' + offset + 'px)';
    }

    if (prevBtn) prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) { currentIndex--; update(); }
    });

    if (nextBtn) nextBtn.addEventListener('click', function() {
        var cpv = getCardsPerView();
        var maxIndex = Math.max(0, cards.length - cpv);
        if (currentIndex < maxIndex) { currentIndex++; update(); }
    });

    window.addEventListener('resize', update);
    update();
})();

// News page: load posts automatically via GitHub API (public repo, no auth needed)
async function loadNieuws() {
    const grid = document.querySelector('.nieuws-grid');
    if (!grid) return;

    try {
        // List all .md files in nieuws/berichten/ via GitHub API
        const apiUrl = 'https://api.github.com/repos/wouterzaalberg/stekelbaars/contents/nieuws/berichten?ref=nieuwe-site';
        const response = await fetch(apiUrl);
        const files = await response.json();

        const mdFiles = files.filter(f => f.name.endsWith('.md'));

        if (mdFiles.length === 0) {
            grid.innerHTML = '<div class="nieuws-empty"><p>Nog geen berichten.</p></div>';
            return;
        }

        // Fetch each markdown file and parse frontmatter
        const posts = await Promise.all(mdFiles.map(async (file) => {
            const res = await fetch(file.download_url);
            const text = await res.text();
            return parseFrontmatter(text);
        }));

        // Sort by date descending
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        grid.innerHTML = posts.map(post => `
            <article class="nieuws-card reveal">
                ${post.image ? `<img src="${post.image}" alt="${post.title}" class="nieuws-card-img">` : ''}
                <div class="nieuws-card-body">
                    <div class="nieuws-card-date">${formatDate(post.date)}</div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                </div>
            </article>
        `).join('');

        // Re-observe new elements
        grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    } catch (e) {
        grid.innerHTML = '<div class="nieuws-empty"><p>Berichten konden niet geladen worden.</p></div>';
    }
}

// Parse YAML frontmatter from markdown
function parseFrontmatter(markdown) {
    const match = markdown.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};
    const frontmatter = {};
    match[1].split('\n').forEach(line => {
        const idx = line.indexOf(':');
        if (idx === -1) return;
        const key = line.slice(0, idx).trim();
        let value = line.slice(idx + 1).trim();
        // Strip quotes
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        frontmatter[key] = value;
    });
    return frontmatter;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
                    'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Init news if on news page
loadNieuws();

// Fish push: one-time small nudge when cursor enters proximity (stays in place).
// Used on contact page and section 4 of the index ("wat zoek jij?").
(function() {
    const sections = document.querySelectorAll('.contact-content, .section-watzoek');
    if (!sections.length) return;

    const radius = 180;    // px — proximity trigger range
    const pushAmount = 35; // px — fixed displacement per push

    sections.forEach(section => {
        const fishes = section.querySelectorAll('.wz-floaters img');
        if (!fishes.length) return;

        const state = new WeakMap();
        fishes.forEach(fish => state.set(fish, { x: 0, y: 0, inside: false }));

        section.addEventListener('mousemove', (e) => {
            const cx = e.clientX, cy = e.clientY;
            fishes.forEach(fish => {
                const r = fish.getBoundingClientRect();
                const fcx = r.left + r.width / 2;
                const fcy = r.top + r.height / 2;
                const dx = fcx - cx;
                const dy = fcy - cy;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                const s = state.get(fish);
                const inside = dist < radius;

                if (inside && !s.inside) {
                    s.x += (dx / dist) * pushAmount;
                    s.y += (dy / dist) * pushAmount;
                    fish.style.translate = s.x.toFixed(1) + 'px ' + s.y.toFixed(1) + 'px';
                }
                s.inside = inside;
            });
        });

        section.addEventListener('mouseleave', () => {
            fishes.forEach(fish => {
                state.get(fish).inside = false;
            });
        });
    });
})();
