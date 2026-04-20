# Stekelbaars Website

Website voor Stekelbaars, communicatiebureau.

- **Klant**: Stekelbaars (communicatiebureau)
- **Contact**: sebastiaan@stekelbaars.nl, dorien@stekelbaars.nl, info@stekelbaars.nl
- **GitHub**: https://github.com/wouterzaalberg/stekelbaars

## Branches & Hosting

| Branch | Hosting | URL | Doel |
|---|---|---|---|
| `main` | GitHub Pages | stekelbaars.nl | Live landingspagina |
| `nieuwe-site` | Netlify | stekelbaars.netlify.app | Volledige site in ontwikkeling |

- Tekstwijzigingen live site → op `main`
- Nieuwe site bouwen → op `nieuwe-site`
- CMS (Decap): `stekelbaars.netlify.app/admin/` via Netlify Identity (git-gateway)

## Huisstijl

### Kleuren
- **Geel**: `#FEDB00` — **punch-kleur**, accent + nav-tekst/logo op hero, links, hover
- **Wit**: `#FFFFFF`
- **Zwart**: `#000000`
- **Middengrijs**: `#808080`
- **Snake-pijl-geel** (staart op zwarte slides): `#FFE980`

### Typografie

| Toepassing | Font | Stijl |
|---|---|---|
| Koppen, titels, posters | Barlow Semi Condensed | Bold, uppercase (kapitalen) |
| Tussenkoppen | Calibri | Bold |
| Broodtekst | Calibri | Regular |

- Barlow Semi Condensed: Google Fonts
- Calibri: systeemfont (fallback: sans-serif)

### Grafische elementen
- **Logo horizontaal**: "STEKELBAARS" met horizontale streepjes in de letters (geel, zwart, wit)
- **Logo met stapel**: Logo met groot streepjespatroon erboven (zwart, wit)
- **Barcode**: Losstaand streepjespatroon als decoratief element
- **Pijlen**: Gele pijl naar rechts met transparante laagjes (normaal en dik)
- **Streepjes**: Verticaal strepenpatroon
- **Baarzen**: Gele + zwarte stekelbaars-illustraties (baars_1/2/3_geel.png + baars_1/2/3_zwart.png)
- **Foto's**: Zwart-wit foto's (foto 1.jpg = stromend water, foto 2.jpg, foto 3.jpg)
- **Fotobehandeling**: Zwart-wit foto's met gele grafische elementen (pijlen, strepen) als overlay

Bestanden in `Huisstijl/` en `img/`.

### Huisstijl kernprincipes
- Streepjes/barcode-motief is centraal in de identiteit
- Bold, grafisch, editoriaal — poster-style koppen
- Hoog contrast: zwart-wit als basis, geel alleen als punch-accent
- Pijlen prominent als decoratief element
- Baarzen (stekelbaars-illustraties) als visueel element achter content

## Sitemap (nieuwe-site branch)

### Pagina's

1. **Home** (`index.html`) — Hero video, Zwem met ons mee (stroom), Onze methode (v2 kinetische bars), Wat zoek jij? (kaarten), Hier zijn we goed in (sticky-scroll blur→sharp), testimonials slider
2. **Het Stroommodel** (`model.html`) — Horizontale scroll (desktop, kinetic smooth), geen footer, 100vh, intro slide (100vw, video bg) + 6 scharnierpunten (80vw), snake-pijl achtergrond
3. **Diensten** (`wat-we-doen.html`) — 5 hoofddiensten (Strategie, Training, Organic, ATL, Crisis) + 5 sub-diensten onder Organic (Social, PR, PA, Design, Events)
4. **Voor wie** (`voor-wie.html`) — Overzicht met 3 klikbare kaarten → subpagina's
    - `voor-wie-bw.html` — Wethouders & Colleges B&W (met STROOM-jaarprogramma checklist)
    - `voor-wie-organisaties.html` — Maatschappelijke organisaties
    - `voor-wie-bedrijven.html` — Bedrijven met een ideaal
5. **Crisis hotline** (`crisis.html`) — Donkere hero, 3 pijlers, aanpak, CTA
6. **Team** (`wie-we-zijn.html`) — Volledig zwarte pagina, visie + 6 teamleden (2 echt + 4 placeholder), baarzen links/rechts
7. **Nieuws** (`nieuws.html`) — Laadt berichten automatisch via GitHub API uit `nieuws/berichten/*.md`
8. **Contact** (`contact.html`) — Contactgegevens (Dorien + Sebastiaan) + formulier (demo, nog niet functioneel)

### Home secties

1. **Hero** (100vh, sticky) — Zwart, video 1 als achtergrond (object-fit cover, donkere overlay). Logo fadet als eerste in (1.2s), daarna tekst "MAAK JE / IDEALEN / WAAR MET" met stagger. Sticky: sectie 2 schuift erover heen (hero-stroom-wrapper).
2. **Zwem met ons mee** (`.section-stroom`, 85vh, z-index 2) — Gele achtergrond. Kop "ZWEM MET ONS MEE" (Barlow, wit, font-size clamp(5rem, 10.5vw, 9.75rem), margin-top -0.34em voor cap-align). Broodtekst rechts (Calibri, wit). Zwarte baars op achtergrond (opacity 0.05, filter:brightness(0)) met idle drift + cursor-tracking. Content binnen 1200px container.
3. **Onze methode** (`.section-methode-v2`, sticky top:0) — Gele achtergrond met animerende witte bars (`.vb-bars`, ~42 stuks, opacity 0.15, kinetic stream). Foto LINKS (`.vb-placeholder-photo`, foto 2.jpg grayscale contrast 1.1, breedte 420-540px, hoogte matcht content). Tekst RECHTS ("Onze methode" + lede + CTA "Bekijk het stroommodel"). Scroll-driven clip-path reveal van `.vb-photo` (achtergrond-foto, 3-stap snap: 10-22-36% breed → 50% volledige hoogte → phase 4 horizontaal naar 100%). Hover op foto → scale 1.025.
4. **Wat zoek jij?** (`.section-watzoek`, 85vh) — **Gele achtergrond**, grote kop, 3 kaarten binnen 1400px container (gap 48px, padding 44×36, min-height 380). Kop 30px, broodtekst 16px. CTA-pijl is `stekelbaars_pijl.png` (28×14). 4 zwarte visjes (baars_1/2/3_zwart) op achtergrond met hover-push via JS mousemove (z-index 1 achter kaarten, mousemove-tracking detecteert cursor binnen bounding-box en togglet `.wz-fish-hovered` class voor 14px translate + 6px up spring-easing).
5. **Hier zijn we goed in** (`.section-wie`, 200vh wrapper + 100vh sticky pane) — Scroll-driven blur-to-sharp: foto 2.jpg start blurred (14px), bij doorscrollen fadet tekst uit (fase 1: progress 0-0.7) EN foto wordt scherp tegelijk. In fase 2 (0.7-1.0) verschijnen hotspots direct (op hover van Dorien/Sebastiaan). Tekst-kader witte achtergrond 92%, tekst zwart, kop geel. Geel visje onder tekst roteert 0-90° synchroon met tekst-fade. Hele container is `<a>` naar team-pagina. Photo 5vh padding boven/onder (witte balk).
6. **Testimonials** (50vh) — Slider met 3 kaarten per view, gele visjes als navigatie

### Stroommodel pagina (model.html)

- Horizontale scroll (desktop), `min-width: 80vw` voor alle slides **behalve** intro (100vw)
- **Intro slide** (100vw): video 1 als achtergrond (autoplay muted loop), donkere overlay 55%. "Het / STROOM / model" in 3 regels (Barlow, geel, font-size clamp(4rem, 10vw, 9rem)). Broodtekst rechts, gele accent "We zitten vast.". Content gecentreerd in slide (max-width 1300px).
- **6 scharnierpunten (S-T-R-O-O-M)**: 80vw elk
    - S — Self / De leider (foto rechts)
    - T — Team / Het Team (**full-bleed photo background**, foto 2.jpg, tekst over donkere gradient)
    - R — Relevantie (foto rechts)
    - O — Organisch / Organische stroming (**full-bleed photo background**, foto 3.jpg)
    - O — Offensief / Media offensief (foto rechts)
    - M — Maatschappelijke verandering / Het ideaal (foto rechts)
- **Slide-animaties**: `.is-active` class op slide dichtst bij viewport-midden → staggered fade-in-up van `.model-slide-number` (0.1s delay), h2 (0.25s), p:nth (0.5/0.7/0.9/1.1/1.3s)
- **Snake-pijl**: SVG-achtergrond-element, rendering in 2 paths (geel `#FFE980` gecliped op zwarte slides, wit op gele slides). Clip-rechthoeken gebruiken **echte** `offsetLeft/offsetWidth` van elke slide (niet `W/7`). Kronkelend pad met 90°-bochten. Staart op sectie 1 is **rechte horizontale lijn op y=0.75**, daarna curve omhoog. Stroke-width 72.5, opacity 0.3, linecap: square. Pijlpunt = stekelbaars_pijl_dik.png (chevron-crop), opacity 0.3, **gepositioneerd op `tailEnd + 36.3px * tangent(tailEnd)`** zodat de kop meedraait in bochten. `vis = drawLength - 36.3` voor naadloze aansluiting met linecap-extensie. **Start opacity 0, fadet in bij eerste scroll.**
- Flow indicator dots: active-detectie via closest-to-viewport-center (werkt met 80/100vw mix)
- Scroll hint: opacity 0.8, fadet uit na 30% scroll

### Team pagina (wie-we-zijn.html)

- Zwarte page-header
- Volledig zwarte achtergrond
- Baars rechts (25% hoogte) + baars links gespiegeld (55% hoogte), 80% opacity, 45% width, parallax scroll-effect
- 6 teamleden in grid (0.4fr foto / 1fr tekst), allemaal foto links + wit tekstvak rechts
- Sebastiaan + Dorien met echte foto's, 4 placeholders (grijze vlakken)
- Contactgegevens onder tekst (email, telefoon, LinkedIn) met scheidingslijn
- Foto's object-fit cover, volledige hoogte kader, grayscale
- "Over Stekelbaars" als aparte witte sectie onderaan, gecentreerde tekst met gele kop + klein visje

### Diensten pagina (wat-we-doen.html)

- Page header + manifest-alinea
- **5 hoofddiensten** (pijler-blocks, afwisselend foto L/R):
    1. Communicatiestrategie (foto 1) — met CTA "Neem vooral een kijkje bij ons STROOM-model om meer te lezen"
    2. Training en Begeleiding (foto 2)
    3. Organic (foto 3)
    4. ATL en Digitale campagnes (foto 1)
    5. Crisiscommunicatie (foto 2) — met CTA naar crisis-hotline
- **5 sub-diensten onder Organic** (tussen pijler 3 en 4, `.organic-specialismen` sectie met `.org-grid`):
    - Social, PR, PA, Design/website/fotografie, Events
    - Kaarten met alleen label + klanttekst (geen uitgevonden h3-koppen)
- CTA-sectie met gele achtergrond

### Voor wie (overzicht + 3 subpagina's)

- **Overzichtspagina** (`voor-wie.html`): page header "Voor wie" + 3 grote klikbare kaarten (vw-card, 1400px container). Elke kaart: foto + H3 (klant-paginatitel) + preview (1e alinea van subpagina) + "Lees meer" pijl. Hover: geel→wit achtergrond, foto zoomt 1.04x, pijl groeit.
- **3 subpagina's** met gedeelde structuur (page header met H1 klant-titel, body-secties met alleen klanttekst, CTA met klant-closing-regels + "Neem contact op" knop + "Terug naar voor wie" link):
    - **voor-wie-bw.html**: Wethouders & Colleges B&W. Heeft STROOM-jaarprogramma checklist (4 items met `.vw-programma-check` gele vinkjes): Jouw ideaal als kompas, De munitiekist, De Red Phone, Autoriteit bouwen.
    - **voor-wie-organisaties.html**: Maatschappelijke organisaties. Met middelenmix-kaarten (PR, Public Affairs, Eigen kanalen).
    - **voor-wie-bedrijven.html**: Bedrijven met een ideaal. Zelfde middelenmix-structuur.

### Navigatie
- Sticky nav, transparant bovenaan, wit bij scroll
- Bovenaan: geel logo + gele links; bij scroll: zwart logo + zwarte links, logo wordt geel bij hover
- Links: Het Stroommodel, Diensten, Voor wie (dropdown: B&W, Organisaties, Bedrijven → link **direct** naar subpagina's `voor-wie-bw.html` etc., niet naar ankers), Team, Crisis hotline (button), Contact
- "Crisis hotline" als gele button met zwarte tekst (witte tekst bij scroll)
- "Contact" als gewone tekstlink
- Footer paginalinks: Diensten, Het Stroommodel, Voor wie (met dropdown), Team, Nieuws
- Hamburger-menu op mobiel (volledig scherm overlay)
- Nav-transitie uitgeschakeld bij page load (voorkomt gele flash), pas actief na eerste frame

### Page headers (subpagina's)
- Zwarte achtergrond met barcode-decoratie
- Kop + subtekst (rgba wit 60%) in `container--wide` (uitgelijnd met logo en content)
- Gebruikt op: wat-we-doen, voor-wie (en 3 subs), wie-we-zijn, nieuws, contact
- Niet op: model.html, crisis.html

### Footer
- Zwarte achtergrond, wit logo
- 5 kolommen: brand, paginalinks, overig (AV, AI-policy, nieuws), contact, vergaderlocatie
- Contact: 3 emailadressen + NAW/KvK/BTW (placeholders) + Koningsplein
- Vergaderlocatie: Het Buurthuisje (eigen kolom)
- Geen footer op model.html (100vh horizontale scroll pagina)

## Nieuws CMS

- **Decap CMS** via Netlify Identity (git-gateway backend)
- Admin: `stekelbaars.netlify.app/admin/`
- Berichten: markdown files in `nieuws/berichten/` met frontmatter (title, date, image, excerpt, body)
- Nieuwspagina laadt berichten automatisch via GitHub API (public repo, geen index nodig)
- Publiceren via CMS → commit op GitHub → Netlify rebuild → live

## Animaties

- **Kinetic smooth scrolling**: Custom JS op desktop — wheel events afgevangen, smooth interpolatie met momentum (ease 0.08), niet op touch-devices
- **Hero slogan**: Elke regel schuift omhoog met stagger (1.5s/1.7s/1.9s delay), laatste regel = logo i.p.v. tekst
- **Sectie 2 baars**: Zwarte baars (filter:brightness(0), opacity 0.05) met idle drift (dubbele sinusgolven) + cursor-tracking (80px/50px bereik, 0.05 ease). Continu via requestAnimationFrame.
- **Sectie 2 heading**: "ZWEM MET ONS MEE" woord-voor-woord fade-in + slide-up (0.15s stagger), getriggerd door IntersectionObserver.
- **Sectie 3 bars**: 42 gele bars die kinetisch van links→rechts stromen, opacity 0.15, willekeurig baselines/snelheden. Muis-repulsie. Clip-path `.vb-bars` groeit mee met scroll (3-staps snap: 10/22/36% breed → 50% full-height → horizontaal naar 100%).
- **Sectie 3 foto-reveal**: `.vb-photo` achtergrond-foto (foto 1.jpg) met clip-path reveal synchroon met `.vb-bars`.
- **Sectie 4 vissen**: 4 zwarte visjes achter kaarten. JS mousemove listener op section → togglet `.wz-fish-hovered` class op elke vis binnen bounding-box van cursor → 14px translate (richting kijkrichting) + 6px omhoog, 0.55s spring-easing.
- **Sectie 5 sticky-scroll**: Scroll-driven CSS custom properties `--sharpen` (0→1), `--text-opacity` (1→0), `--ring-opacity` (step 0→1 op p=0.7). Photo filter `grayscale + blur(14px*(1-sharpen))`. Intro-overlay opacity = `--text-opacity`. Geel visje transform rotate = `(1-text-opacity)*90deg`. Hotspot opacity via `:hover` + `--ring-opacity`.
- **Foto hotspots**: JS-berekende positionering op basis van originele foto-coördinaten, corrigeert voor object-fit:cover crop. Hover toont gele kader (240x240px, 20px border, 50% opacity) + naam. **Alleen actief na text-fade** (ring-opacity gate).
- **Scroll reveal**: `.reveal` class, fade in + schuif omhoog bij 15% visibility
- **Testimonial slider**: 3 kaarten per view, gele visjes als prev/next navigatie, JS-berekende kaartbreedte, responsive (1/2/3 kaarten)
- **Model pagina slide-animaties**: Staggered fade-in-up per slide wanneer die het dichtst bij viewport-midden komt (via JS active-detection, `.is-active` class). Delays: number 0.1s, h2 0.25s, p's 0.5/0.7/0.9/1.1/1.3s.
- **Model snake-pijl**: SVG stroke-dasharray animatie, tekent mee met scroll. Kop-positie via `getPointAtLength + tangent * 36.3px` voor naadloze aansluiting. Start opacity 0, fadet in bij eerste scroll.
- **Model horizontale scroll**: Kinetisch smooth via muiswiel, pijltjestoetsen, active-dot via closest-to-center-detection.
- **Smooth anchor scroll**: Alle `href="#..."` links scrollen vloeiend naar hun doel
- **Reduced motion**: Alle animaties uitgeschakeld

## Responsive (mobile-first pass)

- Content max-width: 1200px (standaard), 1400px (wide)
- Achtergronden en decoratie: full-width (ook ultra-wide)
- **> 900px**: Volledige layout, grids naast elkaar, sticky-secties
- **≤ 900px** (tablets/grote telefoons):
    - Header logo `22px → 14px`
    - Hero kop `clamp(2rem, 9vw, 4rem)`, sticky uit (`position: relative`)
    - Sectie 2: kop gecentreerd + groter (`clamp(3rem, 14vw, 5.5rem)`), baars zichtbaar
    - Sectie 3: blijft desktop-animatie (bars + clip-path reveal)
    - Sectie 4: kaarten 1-koloms, visjes 110px (70% opacity), kop `clamp(2.5rem, 12vw, 4rem)`
    - Sectie 5: sticky-scroll blur-to-sharp blijft actief (JS + CSS vars)
    - Pijler-blocks 1-koloms (foto onder tekst)
    - Voor wie kaarten + sub-middelenmix 1-koloms
    - Model page: horizontale scroll → verticale stack (`flex-direction: column`), snake-pijl verborgen, flow-dots + scroll-hint verborgen
- **≤ 600px** (telefoons): extra typografie-schaling, testimonial cards 80vw breed
- Breakpoints 900/600px worden consistent gebruikt in alle `@media` queries aan eind van `styles.css`

## Bestandsstructuur

```
/
├── CLAUDE.md
├── index.html
├── model.html
├── wat-we-doen.html
├── voor-wie.html
├── voor-wie-bw.html
├── voor-wie-organisaties.html
├── voor-wie-bedrijven.html
├── crisis.html
├── wie-we-zijn.html
├── nieuws.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── admin/
│   ├── index.html            (Decap CMS)
│   └── config.yml
├── nieuws/
│   └── berichten/
│       └── *.md              (nieuwsberichten)
├── img/
│   ├── foto 1.jpg            (stromend water, zwart-wit)
│   ├── foto 2.jpg
│   ├── foto 3.jpg
│   ├── sebas.jpg
│   ├── dorien.jpg
│   ├── video 1.mp4           (hero + intro model achtergrond)
│   └── uploads/              (CMS uploads)
└── Huisstijl/
    ├── stekelbaars logo_in geel.png
    ├── stekelbaars logo_in zwart.png
    ├── stekelbaars logo_in wit.png
    ├── stekelbaars_logo met stapel.png
    ├── stekelbaars_logo met stapel in wit.png
    ├── stekelbaars_barcode.png
    ├── stekelbaars_pijl.png
    ├── stekelbaars_pijl_dik.png
    ├── stekelbaars_streepjes.png
    ├── baars_1_geel.png, baars_2_geel.png, baars_3_geel.png
    ├── baars_1_zwart.png, baars_2_zwart.png, baars_3_zwart.png
    └── stekelbaars logo jpg.jpg/
        ├── stekelbaars logo_in geel.jpg
        ├── stekelbaars logo_in wit.jpg
        └── stekelbaars logo_in zwart.jpg
```

## Notities
- Geen build tools, plain HTML/CSS/JS
- Calibri is Windows systeemfont, fallback naar sans-serif
- KvK, BTW, adressen in footer zijn placeholders
- Contactformulier is demo (alert), backend nog niet gekoppeld
- Stekelbaars is opgericht door Dorien en Sebastiaan (twee oprichters)
- Subpagina-teksten op voor-wie zijn **aangeleverd door klant en letterlijk overgenomen** (geen rewrites, geen uitgevonden tussenkoppen)
- Diensten-pagina idem: 5 hoofddiensten + 5 sub onder Organic met klant-tekst letterlijk
- Cache-busting: `styles.css?v=mX` in alle HTML's, bumpen bij grote CSS-wijzigingen
