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

1. **Home** (`index.html`) — Hero (zwart, video), DIT ZIJN WIJ crossing, stroommodel split, wat zoek jij, waar zijn we goed in, testimonials slider
2. **Het Stroommodel** (`model.html`) — Vrije horizontale scroll (desktop, kinetic smooth), geen footer, 100vh, 6 scharnierpunten + intro, snake-pijl achtergrond
3. **Diensten** (`wat-we-doen.html`) — 4 diensten met afwisselende foto/tekst layout
4. **Voor wie** (`voor-wie.html`) — 4 doelgroepen: wethouders, colleges, organisaties, bestuurders
5. **Crisis hotline** (`crisis.html`) — Donkere hero, 3 pijlers, aanpak, CTA
6. **Team** (`wie-we-zijn.html`) — Volledig zwarte pagina, visie + 6 teamleden (2 echt + 4 placeholder), baarzen links/rechts
7. **Nieuws** (`nieuws.html`) — Laadt berichten automatisch via GitHub API uit `nieuws/berichten/*.md`
8. **Contact** (`contact.html`) — Contactgegevens (Dorien + Sebastiaan) + formulier (demo, nog niet functioneel)

### Home secties

1. **Hero** (100vh, sticky) — Zwart, video 1 als achtergrond (object-fit cover, donkere overlay), gele slogan (clamp 2.8rem/8vw/8rem) + Stekelbaars logo (0.60em) + "Strategisch communicatiebureau" subtekst. Sticky: sectie 2 schuift erover heen (hero-stroom-wrapper).
2. **DIT ZIJN WIJ** (90vh, z-index 2) — Witte achtergrond, 3 rijen (woord + alinea gekoppeld, 2-koloms grid 1fr/2fr, max-width 850px). Alle koppen links van alinea (kolom 1, rechts uitgelijnd). Rij 1+3 van links, rij 2 van rechts. Power-curve (t³): snel binnenkomen → extreem langzaam midden → snel weg. Centered bij raw=0.95. Logo/vis-swap eronder (tilt → vis verschijnt → zwemt weg).
3. **Het Stroommodel** (90vh) — Split-screen: links wit met kop + tekst, rechts geel met test1.png + knop "Bekijk het Stroommodel" + witte stromende balken-animatie (35 bars, fanning out)
4. **Wat zoek jij?** (90vh) — Zwarte achtergrond, grote kop, 3 kaarten (min-height 380px) met baarzen erachter (scale 1.3), scroll-gekoppelde vis-entrance, hover scale-effect
5. **Waar zijn we goed in** (90vh) — Split-screen: links foto 2 (52vw, slow zoom, wit kader boven/links/onder) met hover-hotspots, rechts tekst + knop
6. **Testimonials** (50vh) — Slider met 3 kaarten per view, gele visjes als navigatie (links/rechts, 50%→100% opacity hover)

### Stroommodel pagina (model.html)

- Horizontale scroll, geen footer, 100vh
- **Intro slide**: Zwarte achtergrond, twee-koloms tekst, gele kop, gecentreerd
- **6 scharnierpunten**: Links uitgelijnd, "Scharnierpunt X" label boven de kop. Jij als leider → Je team → Relevantie → Naar buiten → Grote publiek → De bestemming
- **Snake-pijl**: SVG achtergrond-element, geel op zwarte slides (#FEEA70, opacity 0.18), wit op gele slides. Kronkelend pad met 90°-bochten incl. backward loop. Groeit mee met scroll (50% van slide 1 bij laden). Pijlpunt = stekelbaars_pijl_dik.png (chevron-gedeelte, horizontale balk weggeknipt). Staart stroke-width 73px, 37px ingekort voor naadloze aansluiting.
- Flow indicator dots (7 stuks) + scroll hint (gele tekst, fade-out na 30% scroll)

### Team pagina (wie-we-zijn.html)

- Zwarte page-header
- Volledig zwarte achtergrond
- Visie-intro bovenaan (max-width 550px)
- Baars rechts (25% hoogte) + baars links gespiegeld (55% hoogte)
- 6 teamleden in grid (1fr 2fr), afwisselend foto links/rechts
- Sebastiaan + Dorien met echte foto's, 4 placeholders (grijze vlakken)
- Foto's 50% kleiner (1fr kolom), namen in geel, 1 alinea per persoon
- Compacte spacing

### Navigatie
- Sticky nav, transparant bovenaan, wit bij scroll
- Bovenaan: geel logo + gele links; bij scroll: zwart logo + zwarte links, logo wordt geel bij hover
- Links: Het Stroommodel, Diensten, Voor wie, Team, Crisis hotline (button), Contact
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
- **Sectie 2 crossing**: 3 rijen (kopwoord + alinea) bewegen als gekoppelde paren. Rij 1+3 van links, rij 2 van rechts. Power-curve (t³): snel aan randen, extreem langzaam in midden. Centered bij raw=0.95. Opacity gekoppeld aan positie. Logo/vis-swap eronder met tilt + swim-away.
- **Sectie 4 vissen**: Vis 1+3 van boven, vis 2 van onder, continu doorlopend, scroll-gekoppeld, scale 1.3
- **Sectie 5 foto zoom**: Langzame zoom (scale 1→1.06) vanuit midden, 8s ease-out, getriggerd door IntersectionObserver. Wit kader (inset box-shadow) boven/links/onder.
- **STROOM stroming**: Witte balken in rechter helft van sectie 3, spawnen links, waaieren uit naar rechts, recycleren. MAX_BARS=35, spawn interval 1500ms, muis-repulsie.
- **Foto hotspots**: JS-berekende positionering op basis van originele foto-coördinaten, corrigeert voor object-fit:cover crop. Hover toont gele kader (240x240px, 20px border, 50% opacity) + naam.
- **Scroll reveal**: `.reveal` class, fade in + schuif omhoog bij 15% visibility
- **Wat zoek jij hover**: Kaarten schalen naar 1.03 bij hover
- **Testimonial slider**: 3 kaarten per view, gele visjes als prev/next navigatie, JS-berekende kaartbreedte, responsive (1/2/3 kaarten)
- **Model pagina**: Vrije horizontale scroll (geen snap), kinetic smooth scrolling via muiswiel, pijltjestoetsen, flow indicator dots, snake-pijl achtergrond
- **Smooth anchor scroll**: Alle `href="#..."` links scrollen vloeiend naar hun doel
- **Reduced motion**: Alle animaties uitgeschakeld

## Responsive

- Content max-width: 1200px (standaard), 1400px (wide)
- Achtergronden en decoratie: full-width (ook ultra-wide)
- **> 900px**: Volledige layout, grids naast elkaar, split-screens
- **600-900px**: 1-kolom grids, hamburger-menu, stroom-split stacked
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
