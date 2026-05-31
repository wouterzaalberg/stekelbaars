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
- **Pijlen**: Gele pijl naar rechts met transparante laagjes (normaal en dik, `stekelbaars_pijl.png` / `stekelbaars_pijl_dik.png`)
- **Streepjes**: Verticaal strepenpatroon
- **Baarzen**: Gele + zwarte stekelbaars-illustraties (baars_1/2/3_geel.png + baars_1/2/3_zwart.png). **Let op**: baars_1 heeft verschillende afmetingen tussen geel/zwart (2155×1042 vs 2482×1306), baars_2 en baars_3 zijn identiek.
- **Foto's**: `foto 1.jpg` t/m `foto 17.jpg` (en `foto 6.JPG`, `foto 13.JPG`). 1–8 zijn placeholder zwart-wit; **9–17 zijn definitieve klantfoto's in kleur** (gebruikt op model-pagina, diensten, voor-wie, crisis, sectie 3 home).
- **Fotobehandeling**: Klantfoto's (9–17) in kleur. Eerdere zwart-wit-filters op .vw-card-visual en model-foto-img blijven voor decoratieve secties (placeholder-foto's), maar zijn op de voor-wie overzichtspagina **uitgezet** sinds de klantfoto's zijn aangeleverd.

Bestanden in `Huisstijl/` en `img/`.

### Huisstijl kernprincipes
- Streepjes/barcode-motief is centraal in de identiteit
- Bold, grafisch, editoriaal — poster-style koppen
- Hoog contrast: zwart-wit als basis, geel alleen als punch-accent
- Pijlen prominent als decoratief element
- Baarzen (stekelbaars-illustraties) als visueel element achter content

## Sitemap (nieuwe-site branch)

### Pagina's

1. **Home** (`index.html`) — Hero video (`intro stekelbaars.mp4`), Zwem met ons mee (stroom + 3 testimonial-logos), Onze methode (50/50 split: foto 9 links, tekst+bars rechts), Wat zoek jij? (3 kaarten, visjes push), Hier zijn we goed in (45/55 split, foto RECHTS), testimonials slider
2. **Het Stroommodel** (`model.html`) — Horizontale scroll (desktop, kinetic smooth), geen footer, 100vh, intro slide (100vw, video bg `intro stroommodel.mp4`) + 6 scharnierpunten (80vw), snake-pijl achtergrond (PNG-chevron tip). Definitieve foto's: leider=11, relevantie=4 (--xl + inset-yellow), Team=2 (bg), Organisch=10 (bg), Campagne Offensief=14, Het ideaal=5 (full-bleed bg).
3. **Diensten** (`wat-we-doen.html`) — Editorial lijst van **6 hoofddiensten** (Strategie, Training, Organic, **Paid**, 360 campagnes en activaties, Crisis) + 5 sub-specialismen onder Organic (Social, PR, PA, Design, Events). Donkere hero.
4. **Voor wie** (`voor-wie.html`) — Overzicht met 3 klikbare kaarten → subpagina's. Alle subs uniform: dark hero + editorial stack + CTA met heading.
    - `voor-wie-bw.html` — Wethouders & Colleges B&W (STROOM-jaarprogramma, 4 items in editorial stack)
    - `voor-wie-organisaties.html` — Maatschappelijke organisaties (3 items: PR, PA, Eigen kanalen)
    - `voor-wie-bedrijven.html` — Bedrijven met een ideaal (3 items: PR, PA, Eigen kanalen)
5. **Crisis hotline** (`crisis.html`) — Photo-hero (foto 10, donker) met 24/7 CTA, context-sectie (2 alinea's), **editorial lijst 4 items** (Snelle respons, Heldere boodschap, Media strategie, Procesregie) met nummer-flip
6. **Team** (`wie-we-zijn.html`) — Gele pagina, **8 teamleden** (Sebastiaan, Dorien + Joris, Cas, Florian, Wilmar, Sofi, Wouter) in 2-koloms card-grid met **functie-rol-labels**. Geen photo-hero meer, geen "Over Stekelbaars" sectie meer.
7. **Nieuws** (`nieuws.html`) — Laadt berichten automatisch via GitHub API uit `nieuws/berichten/*.md`
8. **Contact** (`contact.html`) — Gele achtergrond, 3 zwemmende visjes (cursor push), zwarte nameplate-labels. Links: kop + intro + gegevens. Rechts: **werkend formulier via Netlify Forms** met reCAPTCHA 2 + honeypot + inline bevestiging (AJAX submit naar `/`). Email-notificaties naar info@, dorien@, sebastiaan@ ingesteld in Netlify dashboard.
9. **AI-beleid** (`ai-beleid.html`) — Simpele legal-page met placeholder tekst
10. **Algemene voorwaarden** (`algemene-voorwaarden.html`) — Legal-page met definitieve klanttekst (23 artikelen). Gebruikt `.legal-body ul > li` met gele dash + caps-strong labels voor sub-bullets per artikel.

## Gedeeld page-head patroon (subpagina's)

**Van toepassing op**: diensten, voor-wie (+ 3 subs), team, crisis, contact (contact is varianten-uitvoering).

Vervangt het oude zwarte page-header patroon:

- **Geen zwarte balk meer**. Paginanaam staat nu **in** de fotosectie als eyebrow.
- **`<section class="page-photo-hero page-photo-hero--85 [page-photo-hero--fotoN]">`** met:
    - `<h1 class="page-photo-hero-eyebrow">Paginanaam</h1>` — klein caps Barlow (0.95rem, letter-spacing 0.22em), zwart, met dun 54×1px gele streepje eronder (`::after`)
    - `<h2 class="page-photo-hero-heading">` met `<span class="page-photo-hero-word">` spans — gele Barlow (clamp(2.75rem, 5.5vw, 5rem)), word-by-word reveal (0.10s stagger, delays tot 14 woorden gedefinieerd)
    - Optioneel: `<p class="page-photo-hero-text">` broodtekst
    - Optioneel: `<a class="btn btn--zwart page-photo-hero-cta">` CTA (gebruikt op crisis)
- **Achtergrond**: `::before` met `url("../img/foto 8.jpg")` default + modifiers:
    - `--foto6` → diensten
    - `--foto7` → (was voor-wie overzicht, niet meer in gebruik)
    - `--foto10` → crisis
    - `--foto11` → voor-wie overzicht (met `background-position: center top` zodat bovenkant zichtbaar bij cover-crop)
- `contactSubtleZoom` 24s ease-in-out infinite (scale 1↔1.06)
- **Overlay**: `::after` rgba(255,255,255,0.65) default. **Donkere variant** via `--dark` modifier (rgba 0,0,0,0.5 + witte eyebrow). Diensten gebruikt `--foto6` met eigen overlay **rgba(0,0,0,0.6)** — iets donkerder dan `--dark` omdat foto 6 zelf lichter is. De 3 voor-wie subpagina's, **crisis** (`--foto10 --dark`), en **voor-wie overzicht** (`--foto11 --dark`) gebruiken allemaal `--dark` voor matching look.
- **Hoogte**: `.page-photo-hero--85 { min-height: 85vh; flex: none }`
- **Uitlijning**: `.page-photo-hero-inner` gebruikt vertical padding only zodat `.container container--wide`'s horizontale padding niet wordt overschreven → eyebrow begint op dezelfde x-positie als het nav-logo

**Nav variant**: `nav nav--zwart` — zwarte achtergrond bovenin (via `.nav--zwart:not(.nav--scrolled)`), bij scroll wisselt naar standaard `.nav--scrolled` (wit bg + zwart logo). Gele letters/logo bovenin, zwart bij scroll.

**Contact is uitzondering**: geen `.page-photo-hero` sectie meer. De `.contact-content` heeft gele bg met 3 zwemmende visjes via `.wz-floaters`. Geen eyebrow. Heading `.contact-animated-heading` "Laten we kennismaken" (zwart, was geel).

**Team is uitzondering**: ook geen `.page-photo-hero` meer. `.team-page--no-hero` modifier voegt extra padding-top toe zodat eerste rij niet onder fixed nav valt.

### Home secties

1. **Hero** (100vh, sticky) — Zwart, video 1 als achtergrond (object-fit cover, donkere overlay). Logo fadet als eerste in (1.2s), daarna tekst "MAAK JE / IDEALEN / WAAR MET" met stagger. Sticky: sectie 2 schuift erover heen (hero-stroom-wrapper).
2. **Zwem met ons mee** (`.section-stroom`, min-height 100vh, z-index 2) — Gele achtergrond. Kop "ZWEM MET ONS MEE" (Barlow, wit, font-size clamp(3.5rem, 9.25vw, 8.75rem), 4 woorden met word-reveal). **`.stroom-layout`** is flex met `justify-content: center` zodat heading+tekst symmetrisch gecentreerd staan. Heading `flex: 0 0 auto` (hugt content). Tekstkolom `flex: 0 0 clamp(9rem, 21vw, 21rem)` (smal, gematcht met heading-breedte). **Scroll-linked fade**: bij progress 0.03→0.8 smoothstep, translateY -110% + opacity 1→0. Zwarte baars op achtergrond met idle drift + cursor-tracking. **Testimonials onderaan**: `.stroom-testimonials` 3-koloms grid met 3 logos (DLT, MUFG, DDH grayscale+brightness 0) + italic Calibri-quote + Barlow caps-attribution. 20vh gap tussen CTA en testimonial-border. Bottom: `align-self: stretch` op label + `margin-bottom: auto` op quote zorgt dat namen op gelijke baseline staan.
3. **Onze methode** (`.section-methode-v2`) — **50/50 split** via `.methode-split` grid (1fr 1fr, min-height 90vh). LINKS: `.methode-photo` met **foto 9.jpg** full-bleed grayscale + dunne gele inset-border. RECHTS: `.methode-pane` (zwart bg) met 12 langzaam slidende gele bars (CSS-only animatie `methodeBarSlide`, verschillende durations 19-28s, negative delays, opacity 0.07-0.10). Tekst: h2 "Onze [BR] methode" met `<br>` tussen woorden (font-size clamp(56px, 7.5vw, 120px)), `.vb-lede` (clamp(0.95rem, 1.1vw, 1.05rem) — matched met sectie 2) + CTA. Mobile: stack onder elkaar. **Twee-fase scroll-driven reveal**: JS berekent `--x-inset`/`--top-inset` CSS-vars frame-by-frame; fase 1 (eerste ~250px scroll) horizontale inset 42%→5% met ease-out cubic = smalle middenkolom die snel naar randen knalt, fase 2 (~450px) horizontale inset 5%→0% + top-inset 50→0 met smoothstep voor rustige finish.
4. **Wat zoek jij?** (`.section-watzoek`, 85vh) — Gele achtergrond. Kop "Voor wie werken we" (4 woorden word-anim). 3 kaarten klikbaar naar **voor-wie subpagina's** (`voor-wie-organisaties.html`, `voor-wie-bedrijven.html`, `voor-wie-bw.html`). **Visjes wegduwen**: proximity-based one-time push (radius 180px, push 35px). Cursor moet uit proximity vóór volgende push triggert. Uses `translate` CSS property (separate van transform animation). Transitie 0.8s ease-out, geen bounce.
5. **Hier zijn we goed in** (`.section-wie`) — **45/55 split** met `order: 1` op tekst, `order: 2` op foto → **foto RECHTS, tekst LINKS**. Foto neemt nog steeds 55%. `.wie-split-text` heeft `align-items: flex-end` + `text-align: right` zodat kop/body/CTA aan de rechterkant van linker kolom staan (dichter bij de foto). Hotspots (Dorien/Sebastiaan) blijven werken op foto. `.wie-cta` heeft `align-self: flex-end`.
6. **Testimonials** (50vh) — Slider met 3 kaarten per view, gele visjes als navigatie (momenteel `display: none`)

### Stroommodel pagina (model.html)

- Horizontale scroll (desktop), `min-width: 80vw` voor alle slides **behalve** intro (100vw)
- **Intro slide** (100vw): **`intro stroommodel.mp4`** als achtergrond (autoplay muted loop), donkere overlay 55%. "Het / STROOM / model" in 3 regels (Barlow, geel). Broodtekst rechts, gele accent "We zitten vast.". Content gecentreerd in slide (max-width 1300px). Intro-tekst blijft staan tijdens scroll.
- **6 scharnierpunten (S-T-R-O-O-M)**: 80vw elk. Body-tekst bevat de **STROOM-letter highlighted** als grote gele Barlow (1.7em, weight 800) `.stroom-letter` span: S (Self), T (Team), R (Relevantie), O (Organisch), M (Maatschappelijke). Op gele slides wordt letter zwart (`.model-slide:nth-child(even):not(.model-slide--photo-bg) .stroom-letter`).
    - S — Self / De leider (**foto 11 rechts, `--lg` 50% breed**)
    - T — Team / Het Team (**full-bleed photo background**, foto 2.jpg, tekst over donkere gradient)
    - R — Relevantie (**foto 4 rechts, `--xl` 58% breed + `--inset-yellow` margins boven/rechts/onder + `model-slide-inner--wide` om max-width op te heffen**)
    - O — Organisch (**full-bleed photo background**, foto 10.jpg)
    - O — Offensief / Campagne Offensief (foto 14 rechts, `--lg` 50% breed)
    - M — Maatschappelijke verandering / Het ideaal (**full-bleed photo background**, foto 5.jpg — niet meer split-layout)
- **Foto-modifiers** (`.model-slide-foto`):
    - `--lg` → `flex: 0 0 50%` (was 35% default)
    - `--xl` → `flex: 0 0 58%`
    - `--inset-yellow` → margin top/right/bottom met clamp(1.5-3.5rem) zodat gele bg overal zichtbaar blijft (linkerkant tegen tekst)
- **`.model-slide-inner--wide`** → `max-width: none` (heft default 1100px cap op zodat foto kan groeien)
- **Mobile fix**: `.is-active` triggert niet op verticale stack (JS gebruikt `scrollLeft`), dus mobile-only CSS override zet `.model-slide-number/h2/p` altijd op `opacity:1; transform:none` ipv 0/translateY(24px).
- **Slide-animaties**: `.is-active` class op slide dichtst bij viewport-midden → staggered fade-in-up van `.model-slide-number` (0.05s), h2 (0.12s), p:nth (0.22/0.32/0.42/0.52/0.62s). **Versneld** vs eerder (was 0.1-1.3s). Duration 0.45s ease-out.
- **Snake-pijl**: SVG-achtergrond-element, 2 paths (geel `#FFE980` op zwarte slides via `clip-black`, wit op gele slides via `clip-yellow`). Clip-rechthoeken gebruiken `offsetLeft/offsetWidth` per slide. Stroke-width 72.5, opacity 0.3, **linecap: butt, linejoin: round** (was square+miter). Arc-radius **r=120** (was 40, beperkt door kortste verticaal segment 140px in move-sequence). Tangent-sample 2px (was 10px) voor accuraat in bochten. Pijlpunt = `stekelbaars_pijl_dik.png` PNG met clip-rect op **x=headW*0.74, width=headW*0.26** (was 0.55/0.45 — die clip startte in transparant shaft-gebied vóór de chevron-V; 0.74 begint exact bij de diagonale banden). PNG positioning: chevron-back op `ptEnd`, tip steekt voorbij path-eind uit (`translate(-headW * 0.74, -headH/2)`).
- **Snake start position**: `{ dir: 'start', x: 0.085, y: 0.58 }` (achter M van STROOM in intro slide, iets onder de heading). Initial tail length `offsetWidth * 0.25` (was 0.5 — 50% korter aan het begin).
- **Snake fade**: opacity 0 op load, fade-in 1.4s ease-out bij eerste scroll. **Fade-out** tussen progress 0.9→1.0 (pijl verdwijnt aan eindpunt).
- Flow indicator dots: active-detectie via closest-to-viewport-center. **Op gele slides**: indicator toggle `.on-yellow` class → inactieve dots `rgba(0,0,0,0.35)`, actieve dot wit (zodat ze niet wegvallen tegen gele bg).
- Nav op deze pagina gebruikt `nav nav--scrolled` (niet het nieuwe nav--zwart patroon)

### Team pagina (wie-we-zijn.html)

- **GEEN photo-hero meer** — direct na de nav komt de team-grid. `.team-page--no-hero` voegt extra padding-top toe (`clamp(7rem, 11vw, 10rem)`) zodat eerste rij niet onder de fixed nav valt.
- **GEEN "Over Stekelbaars" sectie meer** — pagina eindigt na de team-grid.
- **Achtergrond geel**, tekst zwart
- **Zwarte baarzen** op achtergrond — links + rechts gespiegeld, opacity 0.08, z-index 0
- **8 teamleden** in card-grid (was 6 — 2 echte + 4 placeholders):
    - Sebastiaan Timmermans (Mede-oprichter) — foto sebas.jpg
    - Dorien Kuiken (Mede-oprichter) — foto dorien.jpg
    - Joris Tjaden (Public Affairs & onderzoek) — foto joris.jpg
    - Cas van Kleef (Campagnestrateeg) — foto cas.jpg
    - Florian ter Voert (Senior PR specialist, eigen email + LinkedIn) — placeholder
    - Wilmar Versprille (Creatief Strateeg) — foto wilmar.jpg + definitieve bio
    - Sofi (Organic social) — placeholder, tekst volgt, achternaam volgt
    - Wouter Zaalberg (Fotograaf & Filmmaker) — placeholder, tekst volgt
- **Card grid** (`.team-grid`): 2 kolommen, max-width 1120px, centered
- **Team member card** (`.team-member`):
    - Portret foto (3:4 aspect, grayscale contrast 1.05) of placeholder met 45° streepjespatroon
    - **Zwarte nameplate** (`.team-member-name`) die 18px onder foto uitsteekt — gele Barlow caps, font-size clamp(1.2rem, 1.9vw, 1.7rem) zodat lange namen kunnen wrappen
    - **Functie-label** (`.team-member-rol`) bovenaan in de witte tekstkaart: small Barlow caps zwart, gele 2px underline. Toont "Mede-oprichter", "Public Affairs & onderzoek", etc.
    - Witte tekstkaart eronder met padding-top voor nameplate ademruimte
    - Tekst-kaart is `display: flex; flex-direction: column` met `.team-member-contact { margin-top: auto }` → contactlinks staan altijd op gelijke onderbaseline ongeacht tekstlengte
    - Contact-links met gele 2px top-border
- Mobile: team-grid 1-koloms

### Diensten pagina (wat-we-doen.html)

- **Photo-hero** (85vh, `--foto6`) met **donkere overlay** (rgba 0,0,0,0.5 + witte eyebrow). Heading: "Een nieuw soort communicatiebureau" (4 woorden, geel Barlow).
- Body intro: 2 alinea's over Buro Stekelbaars filosofie (geen heading meer in body — die zit nu in hero).
- **Editorial lijst** (`.diensten-lijst` > `.dienst-row` × **6**):
    - Grid `clamp(100-160px) 1fr`: links groot geel nummer, rechts titel + body + optionele CTA
    - Top-border tussen rijen
    - Nummer **01-06** heeft flip-animatie naar gele baars
    - 01 Communicatiestrategie (met STROOM-model CTA)
    - 02 Training en Begeleiding (hot seat sessie, mediatraining, OGSM)
    - 03 Organic (met sub-grid van 5 specialismen)
    - 04 Paid (was sub-card, nu eigen genummerd hoofd-dienst tussen Organic+subs en 360 campagnes)
    - 05 360 campagnes en activaties (was "ATL en Digitale campagnes")
    - 06 Crisiscommunicatie (CTA naar crisis hotline)
- **Foto's bij diensten** (`.dienst-photo`): tussen 1e en 2e alinea in dienst 02 (Training en Begeleiding, `img/training.jpg`) en dienst 05 (360 campagnes, **foto 12**). Beide gebruiken `.dienst-photo--filled` met definitieve afbeelding. 16:10 aspect, 6px gele onderbalk. Max-width 720px (matched met body p). Mobile: aspect 4:3.
- **Organic sub-specialismen** (`.dienst-sub`, na dienst 03, vóór dienst 04):
    - **Editorial nested list** — geen kaart-grid meer, geen beige bg, geen 6px top-accent. Volgt nu hetzelfde editorial ritme als de hoofd-`.dienst-row`'s (thin top/bottom borders, geen boxen)
    - **Tab-indent**: `padding-left: calc(clamp(100px, 12vw, 160px) + clamp(2rem, 4vw, 4rem))` — uitgelijnd onder de "Organic" h3 (matched met nummerkolom + gap uit `.dienst-row`)
    - **Eyebrow** "Binnen Organic — vijf specialismen" met gele 2.5rem horizontale streep ervoor (zelfde stijl als andere eyebrows)
    - **`.dienst-sub-list`** (`<ol>`, geen list-style) met 5 `.dienst-sub-item` rijen
    - Elke `.dienst-sub-item` = 2-koloms grid `clamp(60-100px) 1fr`: links **`.dienst-sub-marker`** (italic lowercase Roman: i, ii, iii, iv, v — gele Barlow), rechts **`.dienst-sub-title`** (Barlow caps, kleinere variant van h3) + body. Thin top-border tussen items, eerste item geen border.
    - 5 specialismen: Social, PR, PA, Design/website/fotografie, Events
    - **Mobile (≤900px)**: marker boven titel (1-koloms), eyebrow zonder streep, geen indent
- **Diensten-CTA** onderaan **gecentreerd** (`text-align: center`) in `<div class="container container--wide">` zodat "Benieuwd wat we voor jou kunnen betekenen?" netjes in het midden staat met btn eronder

### Voor wie (overzicht + 3 subpagina's)

- **Overzichtspagina** (`voor-wie.html`): nav--zwart + page-photo-hero met eyebrow "Voor wie" (85vh, **foto 11 met `background-position: center top`**). Heading (lowercase, géén text-transform): "stekelbaars is er voor iedereen met een ideaal" (8 woorden word-reveal). Daaronder 3 grote klikbare kaarten (vw-card, 1400px container) met **definitieve klantfoto's in kleur**: BW=foto 15, Organisaties=foto 16, Bedrijven=foto 17. **Grayscale-filter op `.vw-card-visual img` verwijderd** sinds klantfoto's in kleur zijn aangeleverd.
- **3 subpagina's geünificeerd** — zelfde flow, zelfde styling:
    - **Photo-hero** met **`page-photo-hero--dark` modifier** (rgba 0,0,0,0.5 + witte eyebrow + gele underline). Echte heading (geen placeholder meer):
        - Bedrijven: "Bouw aan structurele verandering"
        - Organisaties: "Zet jouw missie om in beweging"
        - BW: "Strategische rugdekking voor jouw hele termijn"
    - **Body**: 2-3 intro-alinea's. BW heeft 6 alinea's met `<figure class="dienst-photo">` placeholder na alinea 3, bedrijven heeft `dienst-photo` placeholder na alinea 2 (organisaties nog zonder placeholder). Zelfde styling als diensten 02/05.
    - **Editorial vertical stack** `.vw-mix-grid` (was 3-koloms card-grid, nu flex column met dividers):
        - Elke rij `.vw-mix-card` is 2-koloms grid: titel links (gele underline) + body rechts
        - Horizontale dividers tussen rijen, top/bottom van hele lijst
        - Geen card-boxen meer, geen hover-effecten
        - **`max-width: 820px`** (matched met `.vw-body-wrap`) zodat de grid links/rechts uitlijnt met de body-paragrafen erboven en eronder
    - Specialismen per pagina:
        - **bedrijven/organisaties**: 3 items (PR & Media, Public Affairs, Eigen kanalen)
        - **bw**: 4 items (Jouw ideaal als kompas, De munitiekist, De Red Phone, Autoriteit bouwen). Was eerder programma-grid met checkmarks; nu zelfde editorial style als de andere twee.
    - **Closing alinea** onder de grid
    - **CTA-sectie** met heading (alle 3 hebben nu een h2 met "Zwem met ons mee" variant)
- **CTA varianten**:
    - **Alle 3 subpagina's** (`voor-wie-bw.html`, `voor-wie-organisaties.html`, `voor-wie-bedrijven.html`): `.section--geel` op `.vw-cta` → gele bg. h2 `<em>` is wit (i.p.v. geel), button `btn btn--wit`, barcode-decoratie verborgen (`::before { display: none }`). Eerste opener-zin uit CTA-h2 verhuisd naar de body-tekst erboven (organisaties: "Laat de ruis voor wat het is." → openingszin van laatste body-alinea; bedrijven: "Stop met het jagen op de volgende viral." → openingszin van laatste body-alinea).
    - **Wit-variant** (`.vw-cta:not(.section--zwart)`) is nu niet meer in gebruik op de voor-wie subpagina's, maar blijft als fallback voor toekomstige varianten.
    - **Overzichtspagina** (`voor-wie.html`): `.section--geel` op `.vw-cta` → gele bg + zwarte tekst (matched met `.diensten-cta`). Button `btn btn--zwart`.
    - Gele variant override: `.vw-cta.section--geel { background: var(--geel) }` + `::before { display: none }` + `h2 em { color: var(--wit) }`.

### Crisis hotline (crisis.html)

- **Photo-hero** (85vh, foto 8 default) met:
    - Eyebrow "Crisis hotline"
    - Gele kop "Zit je (onverwacht) in een moeilijke situatie?" (7 woorden word-by-word)
    - Broodtekst: "Wij zorgen voor een heldere aanpak..." (24/7 bereikbaar, politiek sensitief)
    - CTA `.btn.btn--zwart.page-photo-hero-cta` "Neem direct contact op" (mailto Sebastiaan)
- **`.crisis-intro` sectie**: 2 alinea's over de moderne crisis-realiteit (algoritmes, polarisatie, traditionele reflex). Max-width 880px, gecentreerd.
- **Editorial lijst** `.diensten-lijst` (zelfde patroon als diensten-pagina) met heading "Dit is hoe we concreet orde op zaken stellen..." en **4 `.dienst-row` items** (Snelle respons, Heldere boodschap, Media strategie, Procesregie), 01-04 met flip-animatie naar gele baars. De oude `.crisis-grid` + `.crisis-card` classes zijn weg.

### Contact (contact.html)

- **Geen photo-hero**, geen eyebrow. nav--zwart.
- **`.contact-content` met gele achtergrond** (`background: var(--geel)`). Foto + overlay verwijderd. `isolation: isolate` voor stacking context.
- **3 zwemmende visjes** (`.wz-floaters`) op achtergrond — links-boven, rechts-midden (flipped), midden-onder. CSS-animatie `contactFishFloat` (en `--Flip` variant) 7-9s ease-in-out infinite, ±10-16px subtle drift. Negatieve delays zodat ze niet synchroon zwemmen.
- **Cursor-push**: zelfde proximity-based logic als sectie 4 (radius 180px, push 35px one-time). Uses `translate` CSS property zodat het composeert met `transform` animation.
- **Kop**: `.contact-animated-heading` "Laten we kennismaken" — zwart (was geel), 3 woorden word-by-word
- **Subkoppen (labels)** in contact-details: zwarte badges met witte tekst (`background: var(--zwart); color: var(--wit); padding: 0.35rem 0.7rem; display: inline-block`)
- **Email-links** met zwarte 2px border-bottom (was geel — was onleesbaar op geel)
- **Contact-grid 2-koloms**: LINKS info (kop + intro + 4 gegevens-blokken Email/Telefoon/Adres/Vergaderlocatie), RECHTS formulier (Naam/Email/Organisatie/Bericht + Verstuur). Email-block heeft alleen dorien + sebastiaan (info@ weggehaald).
- Detail-items hebben **geen** `.reveal` class meer (altijd direct zichtbaar, was probleem met onleesbaarheid).
- **Formulier werkt via Netlify Forms** (form attributes `data-netlify="true"`, `netlify-honeypot="bot-field"`, `data-netlify-recaptcha="true"`). Submit gaat via AJAX-fetch naar `/`, geeft inline groene bevestiging (`.form-feedback--success`) of rode foutmelding bij netwerk-error (toont HTTP-status voor debug). reCAPTCHA-token wordt server-side gevalideerd door Netlify zelf; geen Google site-key nodig. Na succes: `form.reset()` + `grecaptcha.reset()`. **Form detection moet eenmalig aanstaan** in Netlify dashboard (Forms → "Enable form detection") en email-notificaties zijn ingesteld naar info@/dorien@/sebastiaan@ (komma-separated in één veld).

### Navigatie
- Sticky nav (`position: fixed`)
- **Default (home, model)**: `nav nav--scrolled` on subpages; transparant + gele letters op index hero, wisselt naar wit+zwart bij scroll
- **`nav--zwart` patroon** (diensten, voor-wie +3subs, team, crisis, contact, ai-beleid, algemene-voorwaarden): zwarte bg bovenin via `.nav--zwart:not(.nav--scrolled)`, wisselt naar `nav--scrolled` (wit+zwart) bij scroll. Gele logo/letters blijven bovenin.
- **Volgorde** (header desktop + mobile): Het Stroommodel → Diensten → Voor wie (dropdown) → **Crisis hotline** (button) → **Team** → Contact. Crisis staat dus VOOR Team (was eerder andersom).
- Dropdown Voor wie: B&W, Organisaties, Bedrijven → **direct** naar subpagina's
- "Crisis hotline" als gele button met zwarte tekst (witte tekst bij scroll)
- **Dropdown positie**: `left: 0` (links-uitgelijnd met V van "Voor wie")
- Footer paginalinks: Diensten, Het Stroommodel, Voor wie (met dropdown), Team. **Nieuws-links verborgen** (klant wil nieuws later pas live; `nieuws.html` bestaat nog maar wordt nergens meer gelinkt). Terugzetten = `<li><a href="nieuws.html">Nieuws</a></li>` weer toevoegen in footer Pagina's + Overig.
- Hamburger-menu op mobiel (volledig scherm overlay)

### Page headers (oud patroon — alleen nog voor nieuws)
- Zwarte achtergrond met barcode-decoratie
- Gebruikt op: nieuws
- **Niet meer gebruikt** op diensten, voor-wie (+3subs), team, crisis, contact (gebruiken nu photo-hero eyebrow patroon)

### Footer
- Zwarte achtergrond, wit logo
- 5 kolommen: brand, paginalinks, overig (**AV → `algemene-voorwaarden.html`**, **AI-beleid → `ai-beleid.html`**, nieuws), contact, vergaderlocatie
- Contact: 3 emailadressen + NAW/KvK/BTW (placeholders)
- Vergaderlocatie: Het Buurthuisje (eigen kolom)
- Geen footer op model.html (100vh horizontale scroll pagina)

### Legal pagina's (ai-beleid.html + algemene-voorwaarden.html)
- Simpele content-pagina's met `.legal-page` class (wit bg, padding clamp(7rem, 12vw, 11rem) 0 top)
- `.legal-title`: grote Barlow caps zwart
- `.legal-updated`: small caps grijs "Laatst bijgewerkt: [datum volgt]"
- `.legal-body` max-width 820px: h2's met gele 2px underline + caps, body Calibri 1.7 line-height
- Links binnen body: gele 2px border-bottom, hover gele bg
- Placeholder tekst — klant vult definitieve content nog aan

## Nieuws CMS

- **Decap CMS** via Netlify Identity (git-gateway backend)
- Admin: `stekelbaars.netlify.app/admin/`
- Berichten: markdown files in `nieuws/berichten/` met frontmatter (title, date, image, excerpt, body)
- Nieuwspagina laadt berichten automatisch via GitHub API (public repo, geen index nodig)
- Publiceren via CMS → commit op GitHub → Netlify rebuild → live

## Animaties

- **Kinetic smooth scrolling**: Custom JS op desktop — wheel events afgevangen, smooth interpolatie met momentum (ease 0.08), niet op touch-devices
- **Hero slogan**: Elke regel schuift omhoog met stagger (1.5s/1.7s/1.9s delay), laatste regel = logo i.p.v. tekst
- **Sectie 2 baars**: Zwarte baars (filter:brightness(0), opacity 0.03-0.05) met idle drift (dubbele sinusgolven) + cursor-tracking (80px/50px bereik, 0.05 ease). Continu via requestAnimationFrame.
- **Sectie 2 heading scroll-fade**: JS berekent section progress (-rect.top / height). Bij progress 0.03→0.8 smoothstep easing (t²·(3-2t)). translateY -110% van eigen hoogte + opacity 1→0. Requires `overflow: clip` (niet hidden) op section.
- **Sectie 3 bars (nieuw)**: 12 langzaam slidende gele bars CSS-only (geen JS). Verschillende durations (19-28s), negative animation-delays, opacity 0.07-0.10, posities top 6-92%. `methodeBarSlide` keyframe slidet ze van links naar rechts.
- **Sectie 3/4 kop word-reveal**: `.vb-word-anim` en `.wz-word-anim` via IntersectionObserver `.visible` class met nth-of-type delays (0.10s stagger).
- **Sectie 4 visjes (nieuw)**: 4 zwarte visjes achter kaarten. **Proximity-push**: één-keer-nudge wanneer cursor in radius (180px) komt, 35px verplaatsing in tegen-cursor richting. Vis blijft op nieuwe plek. Cursor moet uit proximity vóór volgende push. Uses `translate` CSS property (separate van `transform` voor scaleX). Transition 0.8s ease-out, geen bounce. Generic JS handler werkt op `.section-watzoek` + `.contact-content`.
- **Sectie 5 photo hotspots**: JS-berekende positionering op basis van originele foto-coördinaten, corrigeert voor object-fit:cover crop. **Per-persoon hover**: `.foto-hotspot-ring` heeft `pointer-events: auto`.
- **Sectie 5 subtle zoom**: `wieSubtleZoom` keyframe 22s ease-in-out infinite (scale 1↔1.05) op foto.
- **Page photo-hero animaties** (subpagina's): `.page-photo-hero-heading` word-by-word reveal via IntersectionObserver + nth-of-type delays (tot 14 woorden). `contactSubtleZoom` 24s op ::before bg foto.
- **Contact visjes**: CSS-keyframes `contactFishFloat` (en `--Flip` variant) — subtle drift via `transform`. Cursor push via `translate` property (zie sectie 4). Generic JS handler werkt op beide secties.
- **Diensten/Crisis nummer-flip**: Elke `.dienst-row` heeft `.dienst-num-flipper` met 2 faces (label + fish). 3D rotateX 180° via `is-fish` class. JS vindt per scroll-tick de rij dichtst bij viewport-center; **alleen** die rij krijgt `.is-fish` (mits binnen ±25% van viewport-midden). Werkt op zowel diensten-pagina als crisis-pagina (zelfde class).
- **Scroll reveal**: `.reveal` class, fade in + schuif omhoog bij 15% visibility
- **Testimonial slider**: 3 kaarten per view, gele visjes als prev/next navigatie
- **Model pagina slide-animaties**: Staggered fade-in-up per slide `.is-active`. Delays: number 0.1s, h2 0.25s, p's 0.5/0.7/0.9/1.1/1.3s.
- **Model snake-pijl**: SVG stroke-dasharray animatie, tekent mee met scroll.
- **Model horizontale scroll**: Kinetisch smooth via muiswiel, pijltjestoetsen.
- **Smooth anchor scroll**: Alle `href="#..."` links scrollen vloeiend naar hun doel
- **Reduced motion**: Alle animaties uitgeschakeld

## Responsive (mobile-first pass)

- Content max-width: 1200px (standaard), 1400px (wide)
- Achtergronden en decoratie: full-width (ook ultra-wide)
- **> 1280px**: Volledige layout
- **901–1280px** (medium monitors / Windows-laptops met 125-150% scaling): team-foto's gecapt op `max-width: 340px` gecentreerd zodat tekst eronder beter in beeld komt. `.team-member-name` font-size `clamp(1.05rem, 1.8vw, 1.4rem)`.
- **≤ 900px** (tablets/grote telefoons):
    - Header logo `22px → 14px`
    - Hero kop `clamp(2rem, 9vw, 4rem)`, sticky uit
    - Sectie 2 X-pattern: **mobiele phase boundaries** (`MOBILE_PHASES`: IN_END 0.20 ipv 0.38) zodat kop+tekst veel eerder op eindpositie staan
    - Sectie 3: blijft desktop-animatie (bars + clip-path reveal)
    - Sectie 4: kaarten 1-koloms, visjes 110px (70% opacity)
    - Sectie 5: split wordt 1-koloms (foto boven tekst)
    - Team grid 1-koloms
    - Diensten dienst-row 1-koloms (nummer boven tekst), sub-grid 1-koloms
    - Voor-wie kaarten + sub-middelenmix 1-koloms
    - Model page: horizontale scroll → verticale stack, snake-pijl verborgen. **Tekst van alle slides altijd zichtbaar** (override `.is-active` opacity-default, omdat de `.is-active`-trigger op `scrollLeft` werkt en op verticale stack alleen de eerste slide ooit actief wordt).
- **≤ 600px** (telefoons): extra typografie-schaling, testimonial cards 80vw breed
- Breakpoints 1280/900/600px worden consistent gebruikt

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
├── ai-beleid.html
├── algemene-voorwaarden.html
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
│   ├── foto 1.jpg            (placeholder zwart-wit)
│   ├── foto 2.jpg            (Team-slide bg, model.html)
│   ├── foto 3.jpg            (placeholder, niet meer actief gebruikt)
│   ├── foto 4.jpg            (Relevantie-slide foto, model.html)
│   ├── foto 5.jpg            (Het ideaal full-bleed bg, model.html)
│   ├── foto 6.JPG            (diensten photo-hero)
│   ├── foto 7.jpg            (was voor-wie hero — vervangen door foto 11)
│   ├── foto 8.jpg            (default photo-hero bg)
│   ├── foto 9.jpg            (sectie 3 home — Onze methode foto)
│   ├── foto 10.jpg           (Organisch bg model + crisis hero)
│   ├── foto 11.jpg           (De leider model + voor-wie overzicht hero)
│   ├── foto 12.jpg           (360 campagnes foto op diensten)
│   ├── foto 13.JPG           (gerenamede foto5.JPG — niet meer actief)
│   ├── foto 14.jpg           (Campagne Offensief model)
│   ├── foto 15.jpg           (voor-wie kaart Wethouders & Burgemeesters)
│   ├── foto 16.jpg           (voor-wie kaart Maatschappelijke organisaties)
│   ├── foto 17.jpg           (voor-wie kaart Bedrijven met een ideaal)
│   ├── sebas.jpg
│   ├── dorien.jpg
│   ├── joris.jpg
│   ├── cas.jpg
│   ├── training.jpg          (diensten 02 Training)
│   ├── intro stekelbaars.mp4 (hero index, 1.9MB gecomprimeerd)
│   ├── intro stroommodel.mp4 (intro model.html, 2.6MB gecomprimeerd)
│   ├── logo's/               (testimonial-logos sectie 2: DLT, MUFG, DDH)
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
    └── baars_1_zwart.png, baars_2_zwart.png, baars_3_zwart.png
```

## Notities
- Geen build tools, plain HTML/CSS/JS
- Calibri is Windows systeemfont, fallback naar sans-serif
- Footer-adres: Stekelbaars, Singel 425, 1012 WP Amsterdam (KvK/BTW nog placeholders)
- **Contactformulier werkt** via Netlify Forms (zie Contact-sectie hierboven). Bevestigd live op `stekelbaars.netlify.app/contact.html` na het eenmalig aanzetten van "Enable form detection" in Netlify dashboard.
- Stekelbaars is opgericht door Dorien en Sebastiaan (twee oprichters)
- Subpagina-teksten op voor-wie zijn **aangeleverd door klant en letterlijk overgenomen** (geen rewrites, geen uitgevonden tussenkoppen)
- Diensten-pagina idem: 6 hoofddiensten + 5 sub onder Organic met klant-tekst letterlijk
- Cache-busting: `styles.css?v=mX` in alle HTML's, **huidige versie: m83**. Bumpen bij grote CSS-wijzigingen.
- AI-beleid is nu **definitieve tekst** (klant keurde de eerder geschreven concepttekst goed; "Placeholder —"-markeringen en "datum volgt" verwijderd, datum op "mei 2026"). Algemene voorwaarden is definitief (klanttekst, 23 artikelen).
- Sectie 2 testimonial-quotes zijn **placeholders** (door Claude verzonnen) — klant moet echte quotes/namen aanleveren
- **Video's gecomprimeerd via Premiere Pro** (H.264, 1280px breed, ~1.5 Mbps VBR, geen audio, faststart-multiplexer): `intro stekelbaars.mp4` 2.9→1.9MB, `intro stroommodel.mp4` 3.8→2.6MB. Totaal -33% bandbreedte per bezoeker — belangrijk voor Netlify credit-quotum.
- **Launch plan**: site gaat volgende week (na 22 mei 2026) live op `stekelbaars.nl`. Migratie-strategie van GitHub Pages (`main`) naar Netlify-deploy nog te bepalen. **Aandachtspunt**: bij switch naar Netlify als productie verlies je géén Netlify Forms / Decap CMS-functionaliteit; bij GitHub Pages wel.
- **Netlify credits**: 300/maand op Free-tier. Op 22 mei was ~150 verbruikt (12 mei → 11 juni cyclus). Video-compressie helpt fors. Bandbreedte schalen we naarmate verkeer groeit.
- Legacy CSS-regels (`.pijler-block*`, `.manifest-*`, `.crisis-grid`, `.crisis-card`, `.vw-programma-grid`, `.vw-programma-item`, `.vw-programma-check`, `.vw-body-photo` etc.) staan er nog in `styles.css` maar worden niet meer gebruikt. Kunnen opgeruimd worden bij grote refactor.
