# Stekelbaars Website

Website voor Stekelbaars, communicatiebureau.

- **Klant**: Stekelbaars (communicatiebureau)
- **Contact**: sebastiaan@stekelbaars.nl
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
- **Geel**: `#FEDB00` — **punch-kleur**, alleen als accent (pijlen, highlights, links, hover), niet als grote achtergrondvlakken
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
- **Fotobehandeling**: Zwart-wit foto's met gele grafische elementen (pijlen, strepen) als overlay

Bestanden in `Huisstijl/`.

### Huisstijl kernprincipes
- Streepjes/barcode-motief is centraal in de identiteit
- Bold, grafisch, editoriaal — poster-style koppen
- Hoog contrast: zwart-wit als basis, geel alleen als punch-accent
- Pijlen prominent als decoratief element
- Grote koppen met barcode/streepjes als decoratie (`.graphic-heading` component)

## Sitemap (nieuwe-site branch)

### Pagina's

1. **Home** (`index.html`) — Hero, intro, model preview, wie we zijn, wie helpen we, testimonials
2. **Model** (`model.html`) — Horizontale scroll (desktop), 5 stappen: Analyse → Strategie → Verhaal → Activatie → Impact
3. **Wat we doen** (`wat-we-doen.html`) — 4 diensten met afwisselende foto/tekst layout
4. **Voor wie** (`voor-wie.html`) — 4 doelgroepen: wethouders, colleges, organisaties, bestuurders
5. **Crisis hotline** (`crisis.html`) — Donkere hero, 3 pijlers, aanpak, CTA
6. **Wie we zijn** (`wie-we-zijn.html`) — Sebastiaan intro, waarden, werkwijze
7. **Nieuws** (`nieuws.html`) — Laadt berichten automatisch via GitHub API uit `nieuws/berichten/*.md`
8. **Contact** (`contact.html`) — Contactgegevens + formulier (demo, nog niet functioneel)

### Home secties

1. **Hero** — Volledig scherm, gele achtergrond, slogan met barcodes, scroll-indicator
2. **Intro** — Grafische kop "TEGEN DE STROOM IN" met barcode + pijl, introtekst
3. **Model preview** — Zwarte achtergrond, grafische kop, 5 stappen dots, link naar model
4. **Wie we zijn** — Foto Sebastiaan + tekst, grafische kop met streepjes
5. **Wie helpen we** — Zwarte achtergrond, grafische kop met pijl, 3 doelgroep-kaarten
6. **Testimonials** — Lichtgrijze achtergrond, 4 quote-kaarten met geel aanhalingsteken

### Navigatie
- Sticky nav, wit bij scroll, zwart logo + links
- "Crisis hotline" als zwarte button met gele tekst
- Hamburger-menu op mobiel (volledig scherm overlay)

### Footer
- Zwarte achtergrond, wit logo
- 3 kolommen: brand, paginalinks, contact (email in geel)

## Nieuws CMS

- **Decap CMS** via Netlify Identity (git-gateway backend)
- Admin: `stekelbaars.netlify.app/admin/`
- Berichten: markdown files in `nieuws/berichten/` met frontmatter (title, date, image, excerpt, body)
- Nieuwspagina laadt berichten automatisch via GitHub API (public repo, geen index nodig)
- Publiceren via CMS → commit op GitHub → Netlify rebuild → live

## Animaties

- **Hero slogan**: Elke regel schuift omhoog met stagger (0.5s - 1.1s delay)
- **Hero barcodes desktop**: Stromen van buitenaf naar binnen met overshoot (1.2s, cubic-bezier)
- **Hero barcodes mobiel**: Afwisselend van links en rechts (gestaggerd)
- **Scroll indicator**: Pijl verschijnt na 2s, bounced zachtjes
- **Scroll reveal**: `.reveal` class, fade in + schuif omhoog bij 15% visibility
- **Model pagina**: Horizontale scroll met snap, muiswiel + pijltjestoetsen, flow indicator dots
- **Reduced motion**: Alle animaties uitgeschakeld

## Responsive

- Content max-width: 1200px (standaard), 1400px (wide)
- Achtergronden en decoratie: full-width (ook ultra-wide)
- **> 900px**: Volledige layout, grids naast elkaar
- **600-900px**: 1-kolom grids, hamburger-menu
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
├── 534A4845.mp4              (watervideo, niet in gebruik)
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
    └── stekelbaars logo jpg.jpg/
        ├── stekelbaars logo_in geel.jpg
        ├── stekelbaars logo_in wit.jpg
        └── stekelbaars logo_in zwart.jpg
```

## Notities
- Watervideo (`534A4845.mp4`) is beschikbaar maar niet in gebruik
- Geen build tools, plain HTML/CSS/JS
- Calibri is Windows systeemfont, fallback naar sans-serif
- Alle dummy tekst en placeholder foto's moeten nog vervangen worden
- Contactformulier is demo (alert), backend nog niet gekoppeld
