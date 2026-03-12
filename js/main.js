/* ============================================
   STEKELBAARS - Main JS
   ============================================ */

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Navigation scroll behavior
const nav = document.querySelector('.nav');
if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
    });
}

// Mobile menu toggle
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');

if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('open');
        document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

// Model page: horizontal scroll indicator
const modelScroll = document.querySelector('.model-horizontal');
if (modelScroll) {
    const dots = document.querySelectorAll('.model-flow-dot');
    const slides = document.querySelectorAll('.model-slide');

    modelScroll.addEventListener('scroll', () => {
        const scrollLeft = modelScroll.scrollLeft;
        const slideWidth = modelScroll.offsetWidth;
        const activeIndex = Math.round(scrollLeft / slideWidth);

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIndex);
        });
    });

    // Keyboard navigation for model
    document.addEventListener('keydown', (e) => {
        if (!modelScroll) return;
        const slideWidth = modelScroll.offsetWidth;

        if (e.key === 'ArrowRight') {
            modelScroll.scrollBy({ left: slideWidth, behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft') {
            modelScroll.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        }
    });

    // Mouse wheel -> horizontal scroll
    modelScroll.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            modelScroll.scrollBy({ left: e.deltaY, behavior: 'auto' });
        }
    }, { passive: false });
}

// News page: load posts automatically via GitHub API (public repo, no auth needed)
async function loadNieuws() {
    const grid = document.querySelector('.nieuws-grid');
    if (!grid) return;

    try {
        // List all .md files in nieuws/berichten/ via GitHub API
        const apiUrl = 'https://api.github.com/repos/wouterzaalberg/stekelbaars/contents/nieuws/berichten?ref=nieuwe-site';
        const response = await fetch(apiUrl);
        const files = await response.json();

        const mdFiles = files.filter(f => f.name.endsWith('.md'));

        if (mdFiles.length === 0) {
            grid.innerHTML = '<div class="nieuws-empty"><p>Nog geen berichten.</p></div>';
            return;
        }

        // Fetch each markdown file and parse frontmatter
        const posts = await Promise.all(mdFiles.map(async (file) => {
            const res = await fetch(file.download_url);
            const text = await res.text();
            return parseFrontmatter(text);
        }));

        // Sort by date descending
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        grid.innerHTML = posts.map(post => `
            <article class="nieuws-card reveal">
                ${post.image ? `<img src="${post.image}" alt="${post.title}" class="nieuws-card-img">` : ''}
                <div class="nieuws-card-body">
                    <div class="nieuws-card-date">${formatDate(post.date)}</div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                </div>
            </article>
        `).join('');

        // Re-observe new elements
        grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    } catch (e) {
        grid.innerHTML = '<div class="nieuws-empty"><p>Berichten konden niet geladen worden.</p></div>';
    }
}

// Parse YAML frontmatter from markdown
function parseFrontmatter(markdown) {
    const match = markdown.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};
    const frontmatter = {};
    match[1].split('\n').forEach(line => {
        const idx = line.indexOf(':');
        if (idx === -1) return;
        const key = line.slice(0, idx).trim();
        let value = line.slice(idx + 1).trim();
        // Strip quotes
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        frontmatter[key] = value;
    });
    return frontmatter;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
                    'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Init news if on news page
loadNieuws();
