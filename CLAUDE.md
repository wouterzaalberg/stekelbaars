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
- **Baarzen**: Gele stekelbaars-illustraties (baars_1_geel.png, baars_2_geel.png, baars_3_geel.png)
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

1. **Home** (`index.html`) — Hero (zwart, video), Wie zijn wij (geel), Onze methode (geel→wit fade, snake-pijl), Voor wie werken we, Waar zijn we goed in, testimonials slider
2. **Het Stroommodel** (`model.html`) — Vrije horizontale scroll (desktop, kinetic smooth), geen footer, 100vh, 6 scharnierpunten (S-T-R-O-O-M) + intro, afwisselend tekst/foto layout, snake-pijl achtergrond
3. **Diensten** (`wat-we-doen.html`) — 4 diensten met afwisselende foto/tekst layout
4. **Voor wie** (`voor-wie.html`) — 4 doelgroepen: wethouders, colleges, organisaties, bestuurders
5. **Crisis hotline** (`crisis.html`) — Donkere hero, 3 pijlers, aanpak, CTA
6. **Team** (`wie-we-zijn.html`) — Volledig zwarte pagina, visie + 6 teamleden (2 echt + 4 placeholder), baarzen links/rechts
7. **Nieuws** (`nieuws.html`) — Laadt berichten automatisch via GitHub API uit `nieuws/berichten/*.md`
8. **Contact** (`contact.html`) — Contactgegevens (Dorien + Sebastiaan) + formulier (demo, nog niet functioneel)

### Home secties

1. **Hero** (100vh, sticky) — Zwart, video 1 als achtergrond (object-fit cover, donkere overlay). Logo fadet als eerste in (1.2s), daarna tekst "MAAK JE / IDEALEN / WAAR MET" met stagger. Sticky: sectie 2 schuift erover heen (hero-stroom-wrapper). Content max-width: 1400px.
2. **Wie zijn wij** (90vh, z-index 2) — Gele achtergrond. Kop "WIE ZIJN WIJ" links (Barlow, wit, woord-voor-woord animatie), broodtekst rechts (Calibri bold, wit, max 28vw). Zwarte baars op achtergrond (opacity 0.05, filter:brightness(0)) met idle drift (sinusgolven) + cursor-tracking (80px/50px bereik, 0.05 ease). CTA "Neem contact met ons op" wit blok onder tekst. Content binnen 1200px container.
3. **Onze methode** (70vh) — Achtergrond fadet van geel→wit (scroll-gekoppeld, 60% vh). Kop "ONZE METHODE" (zwart, woord-animatie) + broodtekst (Calibri regular). Foto 1 rechts (55vw-90vw, grayscale). Snake-pijl SVG (geel, opacity 0.25, stroke-linecap/linejoin round) tekent mee met scroll over volledige sectie+85% hoogte. Pijl loopt over foto heen (z-index 2). Heading kleur fadet van wit→zwart synchroon met achtergrond.
4. **Voor wie werken we** (85vh) — Zwarte achtergrond, grote kop, 3 kaarten (min-height 520px, opacity 0.92) met baarzen erachter. Teksten: Maatschappelijke organisaties, Bedrijven met een ideaal, Wethouders en Burgemeesters.
5. **Waar zijn we goed in** (90vh) — Full-width foto 2 (grayscale, slow zoom) binnen 1200px container. Tekst overlay rechtsonder (donkere achtergrond rgba(0,0,0,0.75), witte tekst). Hover-hotspots Dorien + Sebastiaan.
6. **Testimonials** (50vh) — Slider met 3 kaarten per view, gele visjes als navigatie

### Stroommodel pagina (model.html)

- Horizontale scroll, geen footer, 100vh
- **Intro slide**: Zwarte achtergrond, grote gele kop "Het STROOM model" links, broodtekst rechts. "We zitten vast." als gele accent-zin (Barlow, uppercase, groot).
- **6 scharnierpunten (S-T-R-O-O-M)**: Twee-koloms layout (tekst + foto), afwisselend links/rechts. Labels: S—Self, T—Team, R—Relevantie, O—Organisch, O—Offensief, M—Maatschappelijke verandering. Titels: De leider → Het Team → Relevantie → Organische stroming → Media offensief → Het ideaal. Foto's: mix van echte foto's (foto 1/2/3, grayscale) en grijze placeholders.
- **Snake-pijl**: SVG achtergrond-element, geel op zwarte slides (#FEEA70, opacity 0.18), wit op gele slides. Kronkelend pad met 90°-bochten. Groeit mee met scroll. Pijlpunt = stekelbaars_pijl_dik.png (chevron-gedeelte).
- Flow indicator dots (7 stuks) + scroll hint (gele tekst, fade-out na 30% scroll)
- Afwisselend zwart/gele slides

### Team pagina (wie-we-zijn.html)

- Zwarte page-header
- Volledig zwarte achtergrond
- Baars rechts (25% hoogte) + baars links gespiegeld (55% hoogte), 80% opacity, 45% width, parallax scroll-effect
- 6 teamleden in grid (0.4fr foto / 1fr tekst), allemaal foto links + wit tekstvak rechts
- Sebastiaan + Dorien met echte foto's, 4 placeholders (grijze vlakken)
- Contactgegevens onder tekst (email, telefoon, LinkedIn) met scheidingslijn
- Foto's object-fit cover, volledige hoogte kader, grayscale
- "Over Stekelbaars" als aparte witte sectie onderaan, gecentreerde tekst met gele kop + klein visje

### Navigatie
- Sticky nav, transparant bovenaan, wit bij scroll
- Bovenaan: geel logo + gele links; bij scroll: zwart logo + zwarte links, logo wordt geel bij hover
- Links: Het Stroommodel, Diensten, Voor wie (dropdown: B&W, Organisaties, Bedrijven), Team, Crisis hotline (button), Contact
- "Crisis hotline" als gele button met zwarte tekst (witte tekst bij scroll)
- "Contact" als gewone tekstlink
- Footer paginalinks: Diensten, Het Stroommodel, Voor wie, Team, Nieuws
- Hamburger-menu op mobiel (volledig scherm overlay)
- Nav-transitie uitgeschakeld bij page load (voorkomt gele flash), pas actief na eerste frame

### Page headers (subpagina's)
- Zwarte achtergrond met barcode-decoratie
- Kop + subtekst (rgba wit 60%) in `container--wide` (uitgelijnd met logo en content)
- Gebruikt op: wat-we-doen, voor-wie, wie-we-zijn, nieuws, contact
- Niet op: model.html, crisis.html

### Footer
- Zwarte achtergrond, wit logo
- 5 kolommen: brand, paginalinks, overig (AV, AI-policy, nieuws), contact, vergaderlocatie
- Contact: 3 emailadressen + NAW/KvK/BTW (placeholders) + Koningsplein
- Vergaderlocatie: Het Stroomhuisje (eigen kolom)
- Geen footer op model.html (100vh horizontale scroll pagina)

## Nieuws CMS

- **Decap CMS** via Netlify Identity (git-gateway backend)
- Admin: `stekelbaars.netlify.app/admin/`
- Berichten: markdown files in `nieuws/berichten/` met frontmatter (title, date, image, excerpt, body)
- Nieuwspagina laadt berichten automatisch via GitHub API (public repo, geen index nodig)
- Publiceren via CMS → commit op GitHub → Netlify rebuild → live

## Animaties

- **Kinetic smooth scrolling**: Custom JS op desktop — wheel events afgevangen, smooth interpolatie met momentum (ease 0.08), niet op touch-devices
- **Hero slogan**: Elke regel schuift omhoog met stagger (0.5s - 1.1s delay), laatste regel = logo i.p.v. tekst
- **Sectie 2 baars**: Zwarte baars (filter:brightness(0), opacity 0.05) met idle drift (dubbele sinusgolven) + cursor-tracking (ease 0.05). Continu via requestAnimationFrame.
- **Sectie 2 heading**: "WIE ZIJN WIJ" woord-voor-woord fade-in + slide-up (0.15s stagger), getriggerd door IntersectionObserver.
- **Sectie 3 achtergrond-fade**: Geel→wit RGB-interpolatie, scroll-gekoppeld (60% vh range). Heading fadet synchroon wit→zwart.
- **Sectie 3 snake-pijl**: SVG stroke-dasharray animatie, tekent mee met scroll (range = vh + 85% sectiehoogte). Arrowhead via getPointAtLength + 50px angle-sample. stroke-linecap/linejoin: round (fixt gap bij bochten).
- **Sectie 4 vissen**: Vis 1+3 van boven, vis 2 van onder, continu doorlopend, scroll-gekoppeld, scale 1.3
- **Sectie 5 foto zoom**: Langzame zoom (scale 1→1.06) vanuit midden, 8s ease-out, getriggerd door IntersectionObserver.
- **Foto hotspots**: JS-berekende positionering op basis van originele foto-coördinaten, corrigeert voor object-fit:cover crop. Hover toont gele kader (240x240px, 20px border, 50% opacity) + naam.
- **Scroll reveal**: `.reveal` class, fade in + schuif omhoog bij 15% visibility
- **Wat zoek jij hover**: Kaarten schalen naar 1.03 bij hover
- **Testimonial slider**: 3 kaarten per view, gele visjes als prev/next navigatie, JS-berekende kaartbreedte, responsive (1/2/3 kaarten)
- **Model pagina**: Vrije horizontale scroll (geen snap), kinetic smooth scrolling via muiswiel, pijltjestoetsen, flow indicator dots, snake-pijl achtergrond
- **Smooth anchor scroll**: Alle `href="#..."` links scrollen vloeiend naar hun doel
- **Reduced motion**: Alle animaties uitgeschakeld

## Responsive

- Content max-width: 1200px (standaard), 1400px (hero)
- Achtergronden en decoratie: full-width (ook ultra-wide)
- Alle beeldelementen binnen ~1200px container (behalve hero)
- **> 900px**: Volledige layout, grids naast elkaar, twee-koloms secties
- **600-900px**: 1-kolom grids, hamburger-menu, stroom-layout stacked
- **< 600px**: Hero met mobiele barcodes, grotere slogan, model verticaal

## Bestandsstructuur

```
/
├── CLAUDE.md
├── index.html
├── model.html
├── wat-we-doen.html
├── voor-wie.html
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
│   ├── video 1.mp4           (hero achtergrond)
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
    ├── baars_1_geel.png
    ├── baars_2_geel.png
    ├── baars_3_geel.png
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
