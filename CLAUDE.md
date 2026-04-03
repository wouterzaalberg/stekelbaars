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
- **Foto's**: Zwart-wit foto's (foto 1.jpg = stromend water, foto 2.jpg)
- **Fotobehandeling**: Zwart-wit foto's met gele grafische elementen (pijlen, strepen) als overlay

Bestanden in `Huisstijl/`.

### Huisstijl kernprincipes
- Streepjes/barcode-motief is centraal in de identiteit
- Bold, grafisch, editoriaal — poster-style koppen
- Hoog contrast: zwart-wit als basis, geel alleen als punch-accent
- Pijlen prominent als decoratief element
- Baarzen (stekelbaars-illustraties) als visueel element achter content

## Sitemap (nieuwe-site branch)

### Pagina's

1. **Home** (`index.html`) — Hero (zwart, video uit), STROOM split, stroommodel animatie, wat zoek jij, waar zijn we goed in, testimonials
2. **Het Stroommodel** (`model.html`) — Vrije horizontale scroll (desktop, kinetic smooth), geen footer, 100vh, 6 scharnierpunten + intro
3. **Wat we doen** (`wat-we-doen.html`) — 4 diensten met afwisselende foto/tekst layout
4. **Voor wie** (`voor-wie.html`) — 4 doelgroepen: wethouders, colleges, organisaties, bestuurders
5. **Crisis hotline** (`crisis.html`) — Donkere hero, 3 pijlers, aanpak, CTA
6. **Wie we zijn** (`wie-we-zijn.html`) — Zwarte visie-sectie met baars, Sebastiaan + Dorien intro's (gespiegeld)
7. **Nieuws** (`nieuws.html`) — Laadt berichten automatisch via GitHub API uit `nieuws/berichten/*.md`
8. **Contact** (`contact.html`) — Contactgegevens (Dorien + Sebastiaan) + formulier (demo, nog niet functioneel)

### Home secties

1. **Hero** (100vh) — Zwart, video uitgeschakeld (css display:none), gele slogan + "Strategisch communicatiebureau" subtekst
2. **STROOM** (90vh) — Split-screen: links foto 1 (55vw) met grote gele titel + Stekelbaars logo overlay, rechts tekst + baars_1 decoratie
3. **Het Stroommodel** (90vh) — Gele achtergrond, gecentreerde kop + tekst, witte stromende balken-animatie, knop naar model.html
4. **Wat zoek jij?** (90vh) — Zwarte achtergrond, grote kop, 3 kaarten (min-height 480px) met baarzen erachter (scale 1.9), hover scale-effect
5. **Waar zijn we goed in** (100vh) — Split-screen: links foto 3 (50vw) met hover-hotspots (Dorien rechts, Sebastiaan links — gele kader + naam, klikbaar naar wie-we-zijn), rechts tekst (max 800px) + knop (geel bij hover)
6. **Testimonials** (50vh) — Horizontaal scrollende ticker, lichtgrijze achtergrond

### Stroommodel pagina (model.html)

- Horizontale scroll, geen footer, 100vh
- **Intro slide**: Zwarte achtergrond, twee-koloms tekst, gele kop
- **6 scharnierpunten**: Jij als leider → Je team → Relevantie → Naar buiten → Grote publiek → De bestemming
- Flow indicator dots (7 stuks) + scroll hint

### Wie we zijn pagina

- Zwarte page-header
- Zwarte visie-sectie met tekst links, halve baars_1_geel rechts (staartstuk zichtbaar, kop buiten pagina)
- Sebastiaan: foto links (75% breedte), tekst rechts
- Dorien: tekst links, foto rechts (75% breedte, rechts uitgelijnd) — gespiegelde layout

### Navigatie
- Sticky nav, transparant bovenaan, wit bij scroll
- Bovenaan: geel logo + gele links; bij scroll: zwart logo + zwarte links, logo wordt geel bij hover
- Links: Wat we doen, Het Stroommodel, Voor wie, Wie we zijn, Crisis hotline (button), Contact
- "Crisis hotline" als gele button met zwarte tekst (witte tekst bij scroll)
- "Contact" als gewone tekstlink
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
- **Hero slogan**: Elke regel schuift omhoog met stagger (0.5s - 1.1s delay)
- **STROOM stroming**: Zelfstromende witte balken (150x20px) op gele achtergrond, spawnen links vanuit verticaal midden, waaieren uit naar rechts, delen zich (celdeling), muis-repulsie met smooth interpolatie. IntersectionObserver start/stopt animatie. `prefers-reduced-motion` gerespecteerd
- **Foto hotspots**: JS-berekende positionering op basis van originele foto-coördinaten, corrigeert voor object-fit:cover crop. Hover toont gele kader (200x200px, 18px border, 50% opacity) + naam. data-ring-x/data-ring-y attributen (0-1 range)
- **Scroll reveal**: `.reveal` class, fade in + schuif omhoog bij 15% visibility
- **Wat zoek jij hover**: Kaarten schalen naar 1.03 bij hover
- **Testimonial ticker**: Horizontaal scrollende kaarten, oneindige loop via CSS animation + JS duplicatie
- **Model pagina**: Vrije horizontale scroll (geen snap), kinetic smooth scrolling via muiswiel, pijltjestoetsen, flow indicator dots
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
├── sebas.jpg
├── 534A4845.mp4              (watervideo, hero achtergrond)
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
    ├── foto 1.jpg                (stromend water, zwart-wit)
    ├── foto 2.jpg
    └── stekelbaars logo jpg.jpg/
        ├── stekelbaars logo_in geel.jpg
        ├── stekelbaars logo_in wit.jpg
        └── stekelbaars logo_in zwart.jpg
```

## Notities
- Geen build tools, plain HTML/CSS/JS
- Calibri is Windows systeemfont, fallback naar sans-serif
- Placeholder foto Dorien moet nog vervangen worden (gebruikt sebas.jpg als placeholder)
- KvK, BTW, adressen in footer zijn placeholders
- Contactformulier is demo (alert), backend nog niet gekoppeld
- Stekelbaars is opgericht door Dorien en Sebastiaan (twee oprichters)
