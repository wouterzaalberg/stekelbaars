# Stekelbaars Website (tijdelijke site — `main` branch)

Tijdelijke landingspagina voor Stekelbaars op stekelbaars.nl. De volledige nieuwe site wordt op de `nieuwe-site` branch ontwikkeld (Netlify, stekelbaars.netlify.app). Deze `main` branch host alleen de landingspagina en de wethouders-programma-pagina.

- **Klant**: Stekelbaars (communicatiebureau)
- **Contact**: sebastiaan@stekelbaars.nl, dorien@stekelbaars.nl, info@stekelbaars.nl
- **GitHub**: https://github.com/wouterzaalberg/stekelbaars
- **Live**: stekelbaars.nl (GitHub Pages, CNAME)
- **Branches**:
  - `main` → live tijdelijke site (deze CLAUDE.md beschrijft `main`)
  - `nieuwe-site` → nieuwe site in ontwikkeling (Netlify, eigen CLAUDE.md)

## Huisstijl

### Kleuren
- **Geel**: `#FEDB00` (rgb 254, 219, 0) - primaire merkkleur
- **Wit**: `#FFFFFF`
- **Zwart**: `#000000`
- **Middengrijs**: `#808080` - diensten-sectie achtergrond

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
- Bold, grafisch, editoriaal
- Hoog contrast: zwart-wit + fel geel als enige kleuraccent
- Pijlen prominent als decoratief element

## Landingspagina (index.html)

### Secties

1. **Hero** - Volledig scherm, gele achtergrond (`#FEDB00`)
   - Logo linksboven (zwart), kleiner als watermark
   - Slogan "MAAK JE IDEALEN WAAR MET STEKELBAARS" groot, links uitgelijnd
   - Barcodes als CSS background-image (geen `<img>`), afwisselend streepjes/barcode per regel (`.barcode-alt` class)
   - Links: vaste breedte ~30%, `no-repeat`, `background-position: right center` (afgeknipt aan linkerkant)
   - Rechts: `flex: 1`, `repeat-x`, `background-position: left center` (herhaalt tot rechterrand)
   - Beide: `background-size: auto 400%` voor consistente schaal ongeacht containerbreedte
   - Gele pijl als scroll-indicator onderaan (90deg gedraaid)
   - **Desktop**: Barcodes naast de tekst, stromen van buitenaf naar binnen (water-effect)
   - **Mobiel**: Barcodes boven en onder de tekst (3 rijen elk), stromen afwisselend van links/rechts

2. **Welkomstbanner** - Zwarte balk
   - Tijdelijke tekst over launch 1 juni
   - "1 juni" in Barlow Semi Condensed Bold uppercase
   - Email link in geel

3. **Over Stekelbaars** - Witte achtergrond
   - Twee-koloms grid: foto Sebastiaan links, tekst rechts
   - Foto strekt mee met teksthoogte (`align-items: stretch`, `object-fit: cover`)
   - Drie alinea's over missie, STROOMmodel™ en methode
   - Email link met gele onderstreping, gele achtergrond bij hover
   - Mobiel: foto boven tekst

4. **Diensten** - Middengrijs achtergrond (`#808080`)
   - Drie witte kaarten in grid: Wethouders, Colleges van B en W, Organisaties
   - Kaart titels in geel (`#FEDB00`)
   - Hover: zwarte balk (6px) verschijnt onderaan kaart
   - Subtiel streepjespatroon in achtergrond (4% opacity)
   - Ruimte tussen kaarten
   - Mobiel: kaarten onder elkaar
   - **Wethouders-kaart** heeft een knop `<a class="dienst-card-link">Bekijk het programma →</a>` onderaan (zwarte caps, geel onderlijntje) die linkt naar `wethouders.html`

5. **Crisiscommunicatie** - Zwarte achtergrond
   - Label "Direct hulp nodig?" in geel, uppercase, wide letter-spacing
   - Grote kop "CRISISCOMMUNICATIE" (tot 5rem)
   - Barcode decoratie rechts (6% opacity), verborgen op mobiel
   - Email link in geel

6. **Footer** - Gele achtergrond
   - Zwart logo, klein (20px)
   - Email link in zwart met underline

### Animaties

- **Hero logo**: Fade in (0.8s, delay 0.2s)
- **Hero slogan**: Elke regel schuift omhoog met stagger (0.5s - 1.1s delay)
- **Hero barcodes desktop**: Stromen van buitenaf naar binnen met overshoot (1.2s, cubic-bezier)
  - Links: vanuit rechts richting tekst
  - Rechts: vanuit links richting tekst
- **Hero barcodes mobiel**: Afwisselend van links en rechts (1.2s per barcode, gestaggerd)
- **Scroll indicator**: Pijl verschijnt na 2s, bounced zachtjes
- **Scroll reveal**: Elementen met `.reveal` class faden in + schuiven omhoog bij 15% visibility
- **Dienst cards hover**: Zwarte balk groeit van 0 naar 6px onderaan
- **Reduced motion**: Alle animaties uitgeschakeld

### Responsive breakpoints

- **> 600px (desktop)**: Volledige layout, barcodes naast tekst, foto naast tekst
- **< 900px (tablet)**: Diensten 1 kolom, over-sectie 1 kolom, barcode decoratie verborgen
- **< 600px (mobiel)**:
  - Hero: slogan groter (15vw), barcodes boven/onder, logo 180px, content start op 15vh
  - Over: foto volle breedte boven tekst
  - Crisis: kleinere kop

## Wethoudersprogramma-pagina (wethouders.html)

Losse pagina in stijl van de nieuwe site (specifiek `voor-wie-bw.html` op `nieuwe-site` branch). Doel: programma-pitch voor wethouders en colleges van B&W. Linkt vanaf de Wethouders-kaart op de homepage.

### Structuur

1. **Simple header** (geel balkje) — logo links + "← Terug naar home" rechts. Op mobiel (≤600px) verbergt de terug-link, logo blijft klikbaar als terug-knop.
2. **Page-photo-hero** (`page-photo-hero page-photo-hero--80 page-photo-hero--foto9`)
   - 80vh, `img/foto 9.jpg` als bg via `::before` (subtle zoom 24s), 65% witte overlay via `::after`
   - Eyebrow `<h1 class="page-photo-hero-eyebrow">Wethoudersprogramma</h1>` (kleine zwarte caps, geel streepje eronder)
   - Grote gele kop `<h2 class="page-photo-hero-heading">` "Hoe stuur je op jouw politieke idealen?" — 7 woorden, word-by-word reveal via IntersectionObserver `.visible`
3. **Visje-divider** (`fish-divider`, witte bg, `perspective: 900px`)
   - Gele baars (`Huisstijl/baars_1_geel.png`) gepositioneerd op de overgangslijn tussen hero en body via `margin-top: calc(...)` van halve hoogte
   - Initial state `rotateY(0deg)` (vis kijkt naar rechts, origineel)
   - Bij scrollProgress > 0.12 (12% page scroll) krijgt vis class `.is-flipped` → vloeiende 3D-flip naar `rotateY(180deg)` (kop naar links) in 1.6s ease (`cubic-bezier(0.65, 0, 0.35, 1)`)
   - Bij terug scrollen verdwijnt class → vis flipt terug
4. **Body** (`vw-body`, witte bg)
   - `<div class="vw-body-wrap">` (max-width 820px) met `<h2 class="vw-body-heading">12 maanden strategische rugdekking</h2>` + intro-paragrafen
   - `<figure class="vw-body-photo">` met `img/foto 10.jpg` (16:9 aspect, grayscale contrast, Sebastiaan in beeld). Op mobiel max-width 88% + rechts-uitgelijnd zodat Sebas meer richting midden komt.
   - Vervolg paragrafen en `<p class="vw-body-intro">Wat we voor je doen:</p>`
5. **Programma-grid** (`vw-programma-grid`, max-width 820px)
   - 1-koloms (was 2-koloms in nieuwe-site, hier expliciet 1fr voor leeskolom-uitlijning)
   - 4 `vw-programma-item` kaarten met gele check-mark + h3 + body:
     - Jouw ideaal als kompas
     - De munitiekist
     - De Red Phone
     - Autoriteit bouwen
6. **Wethouders-CTA** (`wethouders-cta`, gele bg)
   - Grote Barlow-vraag, knop "Mail Sebastiaan" (mailto), "← Terug naar home" link

### Geporteerde CSS uit nieuwe site

Alle nodige CSS staat achteraan in `css/styles.css` onder de comment `WETHOUDERS PAGE (geportet van nieuwe-site)`. Geporteerd:

- `.container` / `.container--wide` (1400px max-width)
- `.btn`, `.btn--zwart` (Barlow caps button)
- `.simple-header` family (eigen, niet uit nieuwe site)
- `.page-photo-hero` family + `--80` / `--foto9` modifiers + `@keyframes contactSubtleZoom`
- `.vw-body`, `.vw-body-wrap`, `.vw-body-photo`, `.vw-body-intro`, `.vw-body-heading`
- `.vw-programma-grid`, `.vw-programma-item`, `.vw-programma-check` (geel vakje + zwarte ✓ via border-trick)
- `.wethouders-cta` (eigen, simpele variant op `vw-cta` van nieuwe site — zonder barcode-bg)
- `.dienst-card-link` (knop op homepage Wethouders-kaart naar `wethouders.html`)
- `.fish-divider`, `.fish-rotator`, `.fish-rotator.is-flipped`
- `:root --content-wide: 1400px` toegevoegd

### Animaties (wethouders-pagina)

- **Page-photo-hero bg**: `contactSubtleZoom` 24s ease-in-out infinite (scale 1↔1.06)
- **Page-photo-hero kop**: word-by-word reveal via IntersectionObserver `.visible` class met nth-of-type delays (tot 8 woorden)
- **Visje 3D-flip**: scroll-driven via `requestAnimationFrame`, scrollProgress > 0.12 → toggle `.is-flipped` class → CSS transition 1.6s `cubic-bezier(0.65, 0, 0.35, 1)` van `rotateY(0deg)` → `rotateY(180deg)`. Reduced motion respecteert.
- **Reveal**: bestaande `.reveal` observer (zoals op homepage) op programma-grid en CTA

### Navigatie & link op homepage

- Op `index.html` Wethouders-kaart: `<a href="wethouders.html" class="dienst-card-link">Bekijk het programma →</a>`
- Op `wethouders.html`: simple-header logo + terug-link beide naar `index.html`

## Bestandsstructuur

```
/
├── CLAUDE.md
├── CNAME                 (stekelbaars.nl)
├── index.html            (landingspagina)
├── wethouders.html       (wethoudersprogramma-pagina)
├── sebas.jpg
├── 534A4845.mp4          (watervideo, niet in gebruik)
├── css/
│   └── styles.css        (gedeelde CSS voor index + wethouders, met cache-bust ?v=2)
├── img/
│   ├── foto 7.jpg        (gekopieerd uit nieuwe-site, niet meer in gebruik op pagina's)
│   ├── foto 8.jpg        (gekopieerd uit nieuwe-site, niet meer in gebruik op pagina's)
│   ├── foto 9.jpg        (page-photo-hero bg op wethouders.html)
│   └── foto 10.jpg       (placeholder-foto in body wethouders.html, Sebastiaan)
└── Huisstijl/
    ├── baars_1_geel.png       (gele baars voor visje-divider op wethouders.html)
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
- Watervideo (`534A4845.mp4`) is beschikbaar maar momenteel niet in gebruik
- Geen build tools nodig, plain HTML/CSS/JS
- Calibri is Windows systeemfont, fallback naar sans-serif voor andere OS'en
- Cache-busting via `?v=2` op `<link rel="stylesheet">` in beide pagina's; bumpen bij volgende grote CSS-wijziging
- Wethouders-pagina heeft inline JS in `wethouders.html` (geen aparte `js/main.js`) voor reveal-observer, word-by-word kop, en visje-flip
- `img/foto 7.jpg` en `img/foto 8.jpg` zijn meegekopieerd vanuit nieuwe-site maar in de huidige versie van `wethouders.html` niet meer aangeroepen — kunnen later opgeruimd worden
