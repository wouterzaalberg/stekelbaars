# Stekelbaars Website

Website voor Buro Stekelbaars, idealistisch communicatiebureau in Amsterdam.

- **Klant**: Stekelbaars (communicatiebureau), opgericht door Dorien Kuiken en Sebastiaan Timmermans
- **Contact**: sebastiaan@stekelbaars.nl, dorien@stekelbaars.nl, info@stekelbaars.nl
- **GitHub**: https://github.com/wouterzaalberg/stekelbaars

## Branches & hosting

**Sinds 19 nov 2026 staat de omgebouwde site live** (branch `ombouw-2026` fast-forward naar `main`). De eerste versie ging live op 31 mei 2026.

| Branch | Hosting | URL | Doel |
|---|---|---|---|
| `main` | Netlify | www.stekelbaars.nl | **Live productie** |
| `ombouw-2026` | Netlify branch-preview | — | Ombouw-branch; op 19 nov 2026 identiek aan `main`, mag verwijderd |
| `nieuwe-site` | — | — | Legacy, met pensioen |

- Netlify deployt `main` automatisch (deploy duurt ~15 s). Wijzigingen voor de live site → op `main`.
- Geen aparte worktree meer: de hoofdmap is de enige werkmap. **Kondig een branch-switch altijd eerst aan.**
- DNS bij Squarespace (Google Cloud nameservers): apex A → `75.2.60.5`, `www` CNAME → `stekelbaars.netlify.app`. `www` is primair; apex 301't naar www. MX (Google Workspace) niet aanraken.
- GitHub Pages staat uit (`CNAME` in de root is een overblijfsel, onschadelijk).
- Netlify Personal-plan (1000 credits/maand); builds + bandbreedte tellen. Geen video's self-hosten behalve de hero.

### Redirects (`_redirects`)
Oude pagina's van vóór de ombouw zijn verwijderd en 301'en naar de nieuwe:

| Oud | Nieuw |
|---|---|
| `crisis.html` | `wat-we-doen.html` |
| `model.html` | `aanpak.html` |
| `voor-wie-bw.html`, `voor-wie-organisaties.html`, `voor-wie-bedrijven.html`, `wethouders.html` | `voor-wie.html` |

Crisiscommunicatie, het horizontale stroommodel en B&W als doelgroep bestaan niet meer — ook niet terugzetten in SEO-teksten of JSON-LD.

## Huisstijl

### Kleuren
- **Geel** `#FEDB00` — punch-kleur: accent, nav-logo bovenin, links, hover
- **Wit** `#FFFFFF`, **Zwart** `#000000`, **Middengrijs** `#808080`

### Typografie
| Toepassing | Font | Stijl |
|---|---|---|
| Koppen, titels | Barlow Semi Condensed (Google Fonts) | Bold, uppercase |
| Tussenkoppen | Calibri | Bold |
| Broodtekst | Calibri (fallback sans-serif) | Regular |

### Grafische elementen (`Huisstijl/`)
- Logo horizontaal (geel/zwart/wit), logo met stapel, barcode, streepjes, pijlen (`stekelbaars_pijl.png` / `_dik.png`)
- Baarzen: `baars_1/2/3_geel.png` en `_zwart.png` (baars_1 geel/zwart hebben verschillende afmetingen). `baars_2_zwart.png` wordt gebruikt als "vis-link"-icoon (`.hm-fishlink`).
- Principes: streepjes/barcode centraal, bold en editoriaal, hoog contrast zwart-wit met geel als punch.

### Foto's (`img/`)
- `foto 1–8` zijn oude placeholders (zw-w); `foto 9` en hoger zijn klantfoto's in kleur.
- Hero's: aanpak = foto 18, portfolio = foto 9, voor wie = foto 14, diensten = foto 8, workshop = `Workshop announcement collage.jpg`.
- Teamportretten: `sebas.jpg`, `dorien.jpg`, `arun.jpeg`, `joris.jpg`, `wilmar.jpg`, `nicolette.jpg`, `alies.jpg`, `tessel.jpg`, `wouter.jpg`, …
- Klantlogo's in `img/logo's/`.

## Sitemap

Nav (desktop + mobiel): **Voor wie → Diensten → Portfolio → Aanpak → Team → Contact**. Nieuws staat alleen in de footer.

| Pagina | Bestand | Inhoud |
|---|---|---|
| Home | `index.html` | 1 hero-video + slogan, 2 "Voor organisaties en voor mensen" (`.hm-intro`), **workshop-banner** (`.hm-event`, tijdelijk), 3 klanten/logo's (`.hm-clients` → portfolio), 4 Dorien + Sebas "Een unieke combinatie" (`.hm-duo`, hotspot-foto), 5 "En een unieke aanpak" (`.hm-aanpak` → aanpak) |
| Voor wie | `voor-wie.html` | Eén pagina voor maatschappelijke organisaties + bedrijven met een ideaal. Hero "Voor iedereen met een ideaal" + tekst; geen CTA (op verzoek klant weggehaald) |
| Diensten | `wat-we-doen.html` | 4 genummerde blokken in portfolio-stijl: Communicatiestrategie, Training en Begeleiding, PR en PA, Paid. Gele CTA onderaan |
| Portfolio | `portfolio.html` | Logo-raster (9 vakken), cases om en om (Parkinson Nederland, Actienetwerk Gas Terug, MUFG …), zwarte testimonial-band, gele CTA. **Statisch** (nog geen CMS) |
| Aanpak | `aanpak.html` | "Tegen de stroom in" — het STROOM-model als 6 verticale stappen op geel, testimonial Corinne Venderbos (Parkinson Nederland), CTA. Vervangt het oude horizontale stroommodel |
| Team | `wie-we-zijn.html` | Gele pagina, 2-koloms kaartenraster met nameplate + rol-label. Geen hero |
| Contact | `contact.html` | Gele achtergrond, zwemmende visjes, Netlify-formulier |
| Workshop | `workshop.html` | Engelstalig (`lang="en"`), "From ideal to change" × Arun Chaudhary. **Tijdelijk** |
| Nieuws | `nieuws.html` + `nieuws-bericht.html` | Decap CMS-berichten (zie onder) |
| Legal | `ai-beleid.html`, `algemene-voorwaarden.html` | Definitieve teksten |

### Tijdelijk verborgen (HTML-commentaar, terugzetten = tags weghalen)
- **Portfolio**: testimonial Ieteke Schouten (Gas Terug) — wacht op akkoord
- **Team**: Sanne van de Goor (geen foto) en Sofi (geen tekst + foto)

### Placeholders / open
- Drie portfolio-cases tonen nog het klantlogo in plaats van beeld (o.a. Door de Helft).
- Telefoonnummer op contact staat uit (commentaar).
- Testimonials nooit verzinnen — alleen aangeleverde quotes/namen/foto's.

### Workshop "From ideal to change"
- Do 4 feb 2027, 09:30–17:30, Het Buurthuisje GWL-terrein, Waterkersweg 416, Amsterdam. €795 p.p., max 16 deelnemers.
- Aanmeldknop → Ticketkantoor-shop `https://www.ticketkantoor.nl/shop/ARUN` (doorlinken, géén iframe).
- **Na 4 feb 2027**: banner `.hm-event` op home + `workshop.html` weghalen (en uit sitemap), CSS onder "EVENEMENT-BANNER" (home.css) en "WORKSHOP" (pagina.css) opruimen. Komt de workshop terug, dan gegevens bijwerken.

## CSS-opbouw

Drie stylesheets, geen build tools:

| Bestand | Scope | Cache-versie |
|---|---|---|
| `css/styles.css` | Basis: reset, nav, footer, hero-video, team, contact, nieuws, legal + **veel legacy** van de oude site | `?v=m87` |
| `css/home.css` | Home v2, prefix `.hm-`. Ook gedeelde tokens (`--hm-title-size`, `--hm-body-size`) en `.hm-title/.hm-body/.hm-btn` voor alle v2-pagina's | `?v=h9` |
| `css/pagina.css` | Subpagina's v2, laadt NA home.css. `.ph-` = page hero (geel tekstvlak links, foto rechts met geel-transparante lijst), `.pg-` = bouwstenen (`.pg-section`, `--zwart`, `--geel`, `.pg-cta`, `.pg-casefull`, `.pg-testimonial`, logo-raster) | `?v=p13` |

- Bump de `?v=` van het gewijzigde bestand in **alle** HTML's die het laden.
- Nav: `nav nav--zwart` op subpagina's (zwart bovenin, wit + zwart logo bij scroll).
- Legacy in `styles.css` (crisis-, model-, voor-wie-sub-, stroom-, methode-, page-photo-hero-regels enz.) wordt niet meer gebruikt; opruimen bij een refactor.
- Breakpoints: 1280 / 900 / 600 px. Reduced motion zet animaties uit.
- Animaties: word-reveal via `data-words`, `.reveal` fade-in via IntersectionObserver, kinetic smooth scroll op desktop (niet op touch).
- Spacing-afspraak: ruimte onder een kop = font-size van die kop.

## Contactformulier
Netlify Forms (`data-netlify="true"`, honeypot `bot-field`, `data-netlify-recaptcha="true"`), AJAX-submit naar `/` met inline bevestiging/foutmelding. Notificaties naar info@, dorien@, sebastiaan@ (ingesteld in het Netlify-dashboard). Form detection staat aan.

## Nieuws CMS (Decap)
- Admin: `www.stekelbaars.nl/admin/`, Netlify Identity + git-gateway, `backend.branch: main`. Enige collectie: `nieuws` (title, date, image, excerpt, body) in `nieuws/berichten/*.md`.
- `nieuws.html` laadt de lijst via de GitHub API (`?ref=main`, moet matchen met `admin/config.yml`); `nieuws-bericht.html?slug=<bestandsnaam>` haalt de markdown via `raw.githubusercontent.com` en rendert met de eigen renderer in `js/main.js` (`renderMarkdownBody`/`renderInline`, HTML eerst ge-escaped).
- Beperking: social previews van artikelen tonen de generieke meta (client-side rendering).
- Gebruikers toevoegen: Netlify → Identity → Invite users (registratie "Invite only"). Geen rollen.
- Gepland: portfolio-collectie in Decap (titel, klant, doelgroep, diensten, hoofdfoto, galerij, samenvatting, body, video's als YouTube-nocookie/Vimeo-dnt-links met click-to-load facade). Nog niet gebouwd.

## SEO & analytics
- Per pagina: unieke `<title>` + description, canonical, favicons, Open Graph + Twitter Card — **alle absolute URL's met `https://www.stekelbaars.nl/`**. og:image = `img/og-image.jpg`.
- JSON-LD `ProfessionalService` op `index.html` (adres Singel 425, KvK 42052516, BTW NL869488788B01).
- `robots.txt` (Disallow `/admin/`) en `sitemap.xml` (11 pagina's, bijgewerkt 19 nov 2026).
- **Bij een nieuwe pagina**: head-blok kopiëren en de URL in `sitemap.xml` zetten.
- Na de launch van 19 nov 2026: sitemap opnieuw indienen in Google Search Console.
- Analytics: Cloudflare Web Analytics (cookieloos) — beacon onderaan elke pagina meenemen.

## Notities
- Plain HTML/CSS/JS, geen build tools, geen Python op deze machine (gebruik bash/sed of de Edit-tool).
- Klantteksten **letterlijk** overnemen, geen rewrites of verzonnen tussenkoppen.
- Footer: zwart, kolommen Pagina's / Overig (nieuws, AV, AI-beleid) / Contact (3 e-mailadressen) / Vergaderlocatie (Het Buurthuisje). Adres: Singel 425, 1012 WP Amsterdam.
- Hero-video `img/intro stekelbaars.mp4` (H.264, 1280px, ~1.9 MB, geen audio). `intro stroommodel.mp4` wordt niet meer gebruikt.
- `screenshots-test/` is lokaal en niet getrackt.
