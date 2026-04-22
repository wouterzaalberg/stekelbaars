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
- **Foto's**: `foto 1.jpg` t/m `foto 8.jpg` (en `foto 6.JPG`). Zwart-wit foto's als placeholder content.
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

1. **Home** (`index.html`) — Hero video, Zwem met ons mee (stroom), Onze methode (v2 kinetische bars), Wat zoek jij? (kaarten), Hier zijn we goed in (60/40 split), testimonials slider
2. **Het Stroommodel** (`model.html`) — Horizontale scroll (desktop, kinetic smooth), geen footer, 100vh, intro slide (100vw, video bg) + 6 scharnierpunten (80vw), snake-pijl achtergrond
3. **Diensten** (`wat-we-doen.html`) — Editorial lijst van 5 hoofddiensten (Strategie, Training, Organic, ATL, Crisis) + 5 sub-specialismen onder Organic (Social, PR, PA, Design, Events)
4. **Voor wie** (`voor-wie.html`) — Overzicht met 3 klikbare kaarten → subpagina's
    - `voor-wie-bw.html` — Wethouders & Colleges B&W (met STROOM-jaarprogramma checklist)
    - `voor-wie-organisaties.html` — Maatschappelijke organisaties
    - `voor-wie-bedrijven.html` — Bedrijven met een ideaal
5. **Crisis hotline** (`crisis.html`) — Photo-hero met 24/7 CTA, 3 pijlers, aanpak, CTA
6. **Team** (`wie-we-zijn.html`) — Gele pagina, 6 teamleden (2 echt + 4 placeholder) in card-grid, "Over Stekelbaars" visie-sectie
7. **Nieuws** (`nieuws.html`) — Laadt berichten automatisch via GitHub API uit `nieuws/berichten/*.md`
8. **Contact** (`contact.html`) — Contactgegevens + formulier met foto op achtergrond

## Gedeeld page-head patroon (subpagina's)

**Van toepassing op**: diensten, voor-wie (+ 3 subs), team, crisis, contact (contact is varianten-uitvoering).

Vervangt het oude zwarte page-header patroon:

- **Geen zwarte balk meer**. Paginanaam staat nu **in** de fotosectie als eyebrow.
- **`<section class="page-photo-hero page-photo-hero--85 [page-photo-hero--fotoN]">`** met:
    - `<h1 class="page-photo-hero-eyebrow">Paginanaam</h1>` — klein caps Barlow (0.95rem, letter-spacing 0.22em), zwart, met dun 54×1px gele streepje eronder (`::after`)
    - `<h2 class="page-photo-hero-heading">` met `<span class="page-photo-hero-word">` spans — gele Barlow (clamp(2.75rem, 5.5vw, 5rem)), word-by-word reveal (0.10s stagger, delays tot 14 woorden gedefinieerd)
    - Optioneel: `<p class="page-photo-hero-text">` broodtekst
    - Optioneel: `<a class="btn btn--zwart page-photo-hero-cta">` CTA (gebruikt op crisis)
- **Achtergrond**: `::before` met `url("../img/foto 8.jpg")` default (modifiers `--foto6` → diensten, `--foto7` → voor-wie), `contactSubtleZoom` 24s ease-in-out infinite (scale 1↔1.06)
- **Overlay**: `::after` rgba(255,255,255,0.65)
- **Hoogte**: `.page-photo-hero--85 { min-height: 85vh; flex: none }`
- **Uitlijning**: `.page-photo-hero-inner` gebruikt vertical padding only zodat `.container container--wide`'s horizontale padding niet wordt overschreven → eyebrow begint op dezelfde x-positie als het nav-logo

**Nav variant**: `nav nav--zwart` — zwarte achtergrond bovenin (via `.nav--zwart:not(.nav--scrolled)`), bij scroll wisselt naar standaard `.nav--scrolled` (wit bg + zwart logo). Gele letters/logo bovenin, zwart bij scroll.

**Contact is uitzondering**: geen aparte `.page-photo-hero` sectie. De foto + overlay zit op `.contact-content` zelf; `Contact`-eyebrow staat binnen `.contact-info` boven `.contact-animated-heading` ("Laten we kennismaken" word-by-word).

### Home secties

1. **Hero** (100vh, sticky) — Zwart, video 1 als achtergrond (object-fit cover, donkere overlay). Logo fadet als eerste in (1.2s), daarna tekst "MAAK JE / IDEALEN / WAAR MET" met stagger. Sticky: sectie 2 schuift erover heen (hero-stroom-wrapper).
2. **Zwem met ons mee** (`.section-stroom`, 85vh, z-index 2) — Gele achtergrond. Kop "ZWEM MET ONS MEE" (Barlow, wit, font-size clamp(5rem, 10.5vw, 10rem), letter-spacing -0.03em, margin-top -0.2em, 4 woorden in spans met word-reveal). **Scroll-linked fade**: JS berekent progress; bij progress 0.03→0.8 smoothstep easing, translateY naar -110% van eigen hoogte + opacity 1→0. `overflow: clip` op sectie. Broodtekst rechts. Zwarte baars op achtergrond (opacity 0.03-0.05) met idle drift + cursor-tracking.
3. **Onze methode / Wij gaan tegen de stroom in** (`.section-methode-v2`, `position: relative` — geen sticky meer) — Gele achtergrond met animerende witte bars (`.vb-bars`, ~42 stuks, opacity 0.15, kinetic stream). Foto LINKS (`.vb-placeholder-photo`, foto 4.jpg grayscale contrast 1.1, 3:4 aspect). **Voorgrondfoto fade-in**: opacity 0 → 1 (1.6s ease-out) wanneer `unfoldComplete=true`. Gele inset-rand (6px `rgba(254,219,0,0.25)`) via `::after` box-shadow. Tekst RECHTS: h2 "Wij gaan tegen de stroom in" (6 woorden word-by-word, 0.10s stagger) + lede + CTA "Bekijk het stroommodel". Scroll-driven clip-path reveal van `.vb-photo` (achtergrond-foto, start bij progress 0.7*vh+500px, eind 0.1*vh+500px: ~5 scrolls eerder). Hover op foto → scale 1.025.
4. **Wat zoek jij?** (`.section-watzoek`, 85vh) — Gele achtergrond. Kop "Wij werken voor leiders die hun idealen waar willen maken" als `.wz-title` met `.wz-word-anim` spans (10 woorden, 0.10s stagger, nth-of-type delays). 3 kaarten binnen 1400px container. CTA-pijl is `stekelbaars_pijl.png`. 4 zwarte visjes op achtergrond met hover-push via JS mousemove (togglet `.wz-fish-hovered` class voor 14px translate + 6px up spring-easing).
5. **Hier zijn we goed in** (`.section-wie`) — **55/45 split** (foto 65% → 55%, tekst 45%). Foto LINKS (`.wie-split-photo`, `<a href="wie-we-zijn.html">`), tekst RECHTS (`.wie-split-text`, niet-klikbaar). Foto: foto 2.jpg grayscale, subtle continuous zoom (`wieSubtleZoom` 22s ease-in-out scale 1↔1.05). **Hotspots**: 2 `.foto-hotspot` divs met `data-ring-x/y` (Dorien 0.57/0.30, Sebastiaan 0.43/0.28). Ring = 240×240 met 18px gele border 55% alpha, **pointer-events: auto** zodat de ring zelf het hit-target is. `.foto-hotspot:hover .foto-hotspot-ring` → opacity 1 (alleen die persoon). Tekst: h2 `.wie-intro-heading` 5 woorden ("Hier zijn / we goed in" met `<br>`, `nth-of-type` delay 0.1-0.7s), max-width 50% (halved) body tekst, `.wie-cta` als `<a>` knop (zwart op geel, hover invert naar geel op zwart + translateX 6px) met `stekelbaars_pijl.png` (28×14, filter brightness(0) → brightness(1) on hover). **Klikbaar**: alleen foto en knop, niet de hele sectie.
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
- **Snake-pijl**: SVG-achtergrond-element, rendering in 2 paths (geel `#FFE980` gecliped op zwarte slides, wit op gele slides). Clip-rechthoeken gebruiken **echte** `offsetLeft/offsetWidth` van elke slide. Stroke-width 72.5, opacity 0.3, linecap: square. Pijlpunt = stekelbaars_pijl_dik.png (chevron-crop), opacity 0.3, **gepositioneerd op `tailEnd + 36.3px * tangent(tailEnd)`**. **Start opacity 0, fadet in bij eerste scroll.**
- Flow indicator dots: active-detectie via closest-to-viewport-center
- Nav op deze pagina gebruikt `nav nav--scrolled` (niet het nieuwe nav--zwart patroon)

### Team pagina (wie-we-zijn.html)

- **Nieuw patroon**: nav--zwart + page-photo-hero met eyebrow "Wie we zijn" + gele kop "Wij zijn het strategisch communicatiebureau dat samen met jou je idealen waarmaakt" (12 woorden)
- **Achtergrond geel** (was zwart), tekst zwart
- **Zwarte baarzen** op achtergrond (was geel) — links + rechts gespiegeld, opacity 0.08, z-index 0
- **Card grid** (`.team-grid`): 2 kolommen, max-width 1120px, centered
- **Team member card** (`.team-member`):
    - Portret foto (3:4 aspect, grayscale contrast 1.05)
    - **Zwarte nameplate** (`.team-member-name`) die 18px onder de foto uitsteekt — gele Barlow caps
    - Witte tekstkaart eronder met padding-top dat de nameplate ademruimte geeft
    - Contact-links met gele 2px top-border
- **Placeholder-kaarten** hebben 45° streepjespatroon-gradient (huisstijl-echo)
- **"Over Stekelbaars"** sectie (`.team-visie-sectie`, wit): titel + broodtekst + klein visje. **Visje fade**: `.wie-visje-fade` span met 2 gestapelde baars_2 imgs (zwart boven, geel daaronder). IntersectionObserver `.reveal` → `.visible` class. Zwart fadet 1→0, geel 0→0.6 in 1.2s. Baars_2 gebruikt omdat geel/zwart identieke dimensies hebben (2359×861).
- Mobile: team-grid 1-koloms

### Diensten pagina (wat-we-doen.html)

- **Nieuw patroon**: nav--zwart + page-photo-hero (85vh, foto 6 default) met eyebrow "Diensten" + gele kop "Wij zijn een strategisch communicatiebureau dat je niet moet bellen voor een dik adviesrapport." (14 woorden) + `.page-photo-hero-text` broodtekst
- **Oude `.diensten-manifest` + `.pijler-block*` secties VERWIJDERD**. Vervangen door:
- **Editorial lijst** (`.diensten-lijst` > `.dienst-row` × 5):
    - Grid `clamp(100-160px) 1fr`: links groot geel nummer, rechts titel + body + optionele CTA
    - Top-border tussen rijen
    - Nummer 01-05 heeft flip-animatie — zie Animaties sectie
- **Organic sub-specialismen** (`.dienst-sub`, tussen dienst 03 en 04):
    - **Achtergrondfoto** foto 3.jpg via `::before` met subtle zoom, 78% witte overlay via `::after`
    - **6-koloms grid** (3 boven, 2 gecentreerd onder via `grid-column: 2/span 2` en `4/span 2`)
    - Kaarten (`.dienst-sub-card`) beige bg `#f6f5ef` met gele 2px underline op label
    - 5 specialismen: Social, PR, PA, Design/website/fotografie, Events
- **Diensten-CTA** onderaan in `<div class="container container--wide">` (niet standaard `.container`) zodat "Benieuwd wat we voor jou kunnen betekenen?" uitlijnt met nav-logo + eyebrow

### Voor wie (overzicht + 3 subpagina's)

- **Overzichtspagina** (`voor-wie.html`): nav--zwart + page-photo-hero met eyebrow "Voor wie" (85vh, foto 7). Daaronder 3 grote klikbare kaarten (vw-card, 1400px container).
- **3 subpagina's** met gedeelde structuur (nav--zwart + page-photo-hero eyebrow + klanttekst body + CTA):
    - **voor-wie-bw.html**: Wethouders & Colleges B&W. Heeft STROOM-jaarprogramma checklist (4 items).
    - **voor-wie-organisaties.html**: Maatschappelijke organisaties. Met middelenmix-kaarten (PR, Public Affairs, Eigen kanalen).
    - **voor-wie-bedrijven.html**: Bedrijven met een ideaal. Zelfde middelenmix-structuur.
- **Placeholder foto 7** tussen tekstblokken: `<figure class="vw-body-photo">` met `foto 7.jpg` (16:9 aspect, grayscale contrast), 820px breed (zelfde als `.vw-body-wrap`). Geplaatst in midden van eerste `.vw-body-wrap`.
- **CTA-sectie witte variant**: `.section--zwart` class **verwijderd**. CSS override via `.vw-cta:not(.section--zwart)` maakt bg wit, tekst zwart, barcode-decoratie inverted. Hoofdpagina voor-wie heeft nog wel `.section--zwart` (blijft zwart).

### Crisis hotline (crisis.html)

- **Nieuw patroon**: nav--zwart + page-photo-hero (85vh, foto 8) met:
    - Eyebrow "Crisis hotline"
    - Gele kop "Zit je (onverwacht) in een moeilijke situatie?" (7 woorden word-by-word)
    - Broodtekst: "Wij helpen je er doorheen..."
    - CTA `.btn.btn--zwart.page-photo-hero-cta` "Neem direct contact op" (mailto Sebastiaan)
- **Oude `.crisis-hero`** (met crisis-label, br in h1, p, button) vervangen door dit patroon
- Onder photo-hero blijven de bestaande 3 pijlers, aanpak-sectie en CTA

### Contact (contact.html)

- **Nieuw patroon maar aangepast**: nav--zwart, **geen** aparte `.page-photo-hero` sectie (was `.contact-content` met foto al in gebruik)
- `Contact` eyebrow als `<h1 class="page-photo-hero-eyebrow">` binnen `.contact-info` boven de gele h2
- Gele kop is `.contact-animated-heading` "Laten we kennismaken" (3 woorden word-by-word, eigen `.contact-word` class)
- `.contact-content` heeft foto 8 als bg via `::before` met subtle zoom, 65% witte overlay via `::after`
- Daaronder: contact-grid (info links + formulier rechts)

### Navigatie
- Sticky nav (`position: fixed`)
- **Default (home, model)**: `nav nav--scrolled` on subpages; transparant + gele letters op index hero, wisselt naar wit+zwart bij scroll
- **Nieuw `nav--zwart` patroon** (diensten, voor-wie +3subs, team, crisis, contact): zwarte bg bovenin via `.nav--zwart:not(.nav--scrolled)`, wisselt naar `nav--scrolled` (wit+zwart) bij scroll. Gele logo/letters blijven bovenin.
- Links: Het Stroommodel, Diensten, Voor wie (dropdown: B&W, Organisaties, Bedrijven → **direct** naar subpagina's), Team, Crisis hotline (button), Contact
- "Crisis hotline" als gele button met zwarte tekst (witte tekst bij scroll)
- **Dropdown**: `left: 0` (links-uitgelijnd met V van "Voor wie") ipv voorheen gecentreerd
- Footer paginalinks: Diensten, Het Stroommodel, Voor wie (met dropdown), Team, Nieuws
- Hamburger-menu op mobiel (volledig scherm overlay)

### Page headers (oud patroon — alleen nog voor nieuws)
- Zwarte achtergrond met barcode-decoratie
- Gebruikt op: nieuws
- **Niet meer gebruikt** op diensten, voor-wie (+3subs), team, crisis, contact (gebruiken nu photo-hero eyebrow patroon)

### Footer
- Zwarte achtergrond, wit logo
- 5 kolommen: brand, paginalinks, overig (AV, AI-policy, nieuws), contact, vergaderlocatie
- Contact: 3 emailadressen + NAW/KvK/BTW (placeholders)
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
- **Sectie 2 baars**: Zwarte baars (filter:brightness(0), opacity 0.03-0.05) met idle drift (dubbele sinusgolven) + cursor-tracking (80px/50px bereik, 0.05 ease). Continu via requestAnimationFrame.
- **Sectie 2 heading scroll-fade**: JS berekent section progress (-rect.top / height). Bij progress 0.03→0.8 smoothstep easing (t²·(3-2t)). translateY -110% van eigen hoogte + opacity 1→0. Requires `overflow: clip` (niet hidden) op section.
- **Sectie 3 bars**: 42 gele bars kinetic stream. Clip-path `.vb-bars` groeit mee met scroll (3-staps snap: 10/22/36% breed → 50% full-height → horizontaal naar 100%). Start 0.7*vh+500px, eind 0.1*vh+500px.
- **Sectie 3 foto-reveal**: `.vb-photo` achtergrond-foto (foto 1.jpg) clip-path reveal synchroon met bars.
- **Sectie 3 voorgrondfoto fade**: `.vb-placeholder-photo` (foto 4.jpg) opacity 0→1 met 1.6s ease-out transitie, getriggerd door JS wanneer `unfoldProgress >= 0.999`.
- **Sectie 3/4 kop word-reveal**: `.vb-word-anim` en `.wz-word-anim` via IntersectionObserver `.visible` class met nth-of-type delays (0.10s stagger).
- **Sectie 4 vissen**: 4 zwarte visjes achter kaarten. Mousemove togglet `.wz-fish-hovered` class op vis binnen bounding-box → 14px translate + 6px up spring-easing.
- **Sectie 5 photo hotspots**: JS-berekende positionering op basis van originele foto-coördinaten, corrigeert voor object-fit:cover crop. **Per-persoon hover**: `.foto-hotspot-ring` heeft `pointer-events: auto` en is zelf het hit-target — alleen het vierkantje waar cursor overheen gaat toont.
- **Sectie 5 subtle zoom**: `wieSubtleZoom` keyframe 22s ease-in-out infinite (scale 1↔1.05) op foto.
- **Page photo-hero animaties** (subpagina's): `.page-photo-hero-heading` word-by-word reveal via IntersectionObserver + nth-of-type delays (tot 14 woorden). `contactSubtleZoom` 24s op ::before bg foto. Matching pattern op `.contact-animated-heading`.
- **Team visje fade** (zwart→geel): `.wie-visje-fade` wrap met 2 gestapelde baars_2 imgs. Observer `.reveal` → `.visible` class doet cross-fade (zwart 1→0, geel 0→0.6) in 1.2s ease-out.
- **Diensten nummer-flip**: Elke `.dienst-row` heeft `.dienst-num-flipper` met 2 faces (label + fish). 3D rotateX 180° via `is-fish` class. JS vindt per scroll-tick de rij dichtst bij viewport-center; **alleen** die rij krijgt `.is-fish` (mits binnen ±25% van viewport-midden). Zo is er altijd maar **één** visje tegelijk zichtbaar. `perspective: 900px` + `backface-visibility: hidden` voor de flip. Respecteert `prefers-reduced-motion`.
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
- **> 900px**: Volledige layout, grids naast elkaar, sticky-secties
- **≤ 900px** (tablets/grote telefoons):
    - Header logo `22px → 14px`
    - Hero kop `clamp(2rem, 9vw, 4rem)`, sticky uit
    - Sectie 2: kop gecentreerd + groter, baars zichtbaar
    - Sectie 3: blijft desktop-animatie (bars + clip-path reveal)
    - Sectie 4: kaarten 1-koloms, visjes 110px (70% opacity)
    - Sectie 5: split wordt 1-koloms (foto boven tekst)
    - Team grid 1-koloms
    - Diensten dienst-row 1-koloms (nummer boven tekst), sub-grid 1-koloms
    - Voor-wie kaarten + sub-middelenmix 1-koloms
    - Model page: horizontale scroll → verticale stack, snake-pijl verborgen
- **≤ 600px** (telefoons): extra typografie-schaling, testimonial cards 80vw breed
- Breakpoints 900/600px worden consistent gebruikt

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
│   ├── foto 4.jpg            (sectie 3 voorgrondfoto)
│   ├── foto 5.jpg
│   ├── foto 6.JPG            (diensten photo-hero)
│   ├── foto 7.jpg            (voor-wie photo-hero + placeholder in subs)
│   ├── foto 8.jpg            (default photo-hero bg)
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
    └── baars_1_zwart.png, baars_2_zwart.png, baars_3_zwart.png
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
- Legacy CSS-regels (`.pijler-block*`, `.manifest-*`, `.organic-specialismen`, `.org-*`, `.page-head-block`) staan er nog in `styles.css` maar worden niet meer gebruikt. Kunnen opgeruimd worden bij grote refactor.
