# Stekelbaars Website

Website voor Stekelbaars, communicatiebureau. Gestart als landingspagina, wordt later uitgebreid.

- **Klant**: Stekelbaars (communicatiebureau)
- **Contact**: sebastiaan@stekelbaars.nl
- **Launch**: 16 april
- **GitHub**: https://github.com/wouterzaalberg/stekelbaars
- **GitHub Pages**: wouterzaalberg.github.io/stekelbaars

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
   - Barcode/streepjespatronen vullen de ruimte naast de tekst (links: vaste breedte ~30%, rechts: flexibel)
   - Gele pijl als scroll-indicator onderaan (90deg gedraaid)
   - **Desktop**: Barcodes naast de tekst, stromen van buitenaf naar binnen (water-effect)
   - **Mobiel**: Barcodes boven en onder de tekst (3 rijen elk), stromen afwisselend van links/rechts

2. **Welkomstbanner** - Zwarte balk
   - Tijdelijke tekst over launch 16 april
   - "Op 16 april" in Barlow Semi Condensed Bold uppercase
   - Email link in geel

3. **Over Stekelbaars** - Witte achtergrond
   - Twee-koloms grid: foto Sebastiaan links, tekst rechts
   - Drie alinea's over missie en methode
   - Email link met gele onderstreping, gele achtergrond bij hover
   - Mobiel: foto boven tekst

4. **Diensten** - Middengrijs achtergrond (`#808080`)
   - Drie witte kaarten in grid: Wethouders, Colleges van B en W, Organisaties
   - Kaart titels in geel (`#FEDB00`)
   - Hover: zwarte balk (6px) verschijnt onderaan kaart
   - Subtiel streepjespatroon in achtergrond (4% opacity)
   - Ruimte tussen kaarten
   - Mobiel: kaarten onder elkaar

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

## Bestandsstructuur

```
/
├── CLAUDE.md
├── index.html
├── sebas.jpg
├── 534A4845.mp4          (watervideo, niet in gebruik)
├── css/
│   └── styles.css
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
- Watervideo (`534A4845.mp4`) is beschikbaar maar momenteel niet in gebruik in de hero
- Geen build tools nodig, plain HTML/CSS/JS
- Calibri is Windows systeemfont, fallback naar sans-serif voor andere OS'en
