/* ============================================
   TASFIA MAHMUD — PORTFOLIO JS
   ============================================ */

// --- Artwork Data ---
const artworks = [
  {
    id: 'piece-1',
    title: 'Ethereal Dawn',
    category: 'watercolor',
    medium: 'Watercolor on paper',
    dimensions: '18" × 24"',
    year: 2025,
    thumbnail: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&q=80',
    full: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=1400&q=85',
    description: 'Soft washes of rose and amber converge in a meditation on the first light of morning.',
    color: '#E8C4C4'
  },
  {
    id: 'piece-2',
    title: 'Still Life with Lavender',
    category: 'painting',
    medium: 'Oil on canvas',
    dimensions: '24" × 36"',
    year: 2025,
    thumbnail: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=600&q=80',
    full: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=1400&q=85',
    description: 'A quiet arrangement exploring the delicate balance between structure and organic form.',
    color: '#C4B7D4'
  },
  {
    id: 'piece-3',
    title: 'Fragments of Green',
    category: 'mixed-media',
    medium: 'Mixed media on board',
    dimensions: '20" × 20"',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80',
    full: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1400&q=85',
    description: 'Layered textures in sage and moss — a study of growth and quiet accumulation.',
    color: '#B7C4A8'
  },
  {
    id: 'piece-4',
    title: 'Breath',
    category: 'drawing',
    medium: 'Ink on paper',
    dimensions: '14" × 18"',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=600&q=80',
    full: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=1400&q=85',
    description: 'Rhythmic ink gestures trace the invisible movement of air and rest.',
    color: '#D4CFC4'
  },
  {
    id: 'piece-5',
    title: 'Tender Archive',
    category: 'mixed-media',
    medium: 'Collage and watercolor',
    dimensions: '16" × 22"',
    year: 2025,
    thumbnail: 'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=600&q=80',
    full: 'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=1400&q=85',
    description: 'Gathered paper, pigment, and memory compose a tactile letter to the self.',
    color: '#D4C4C4'
  },
  {
    id: 'piece-6',
    title: 'The Garden Sleeps',
    category: 'watercolor',
    medium: 'Watercolor on cold press',
    dimensions: '22" × 30"',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=600&q=80',
    full: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=1400&q=85',
    description: 'Winter hues settle over a dormant landscape — patience rendered in pigment.',
    color: '#C4CDD4'
  },
  {
    id: 'piece-7',
    title: 'Soft Geometry',
    category: 'painting',
    medium: 'Acrylic on canvas',
    dimensions: '30" × 40"',
    year: 2025,
    thumbnail: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80',
    full: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1400&q=85',
    description: 'Pastel planes and curved edges explore the space between order and warmth.',
    color: '#D8C4D4'
  },
  {
    id: 'piece-8',
    title: 'Notation',
    category: 'drawing',
    medium: 'Graphite and ink',
    dimensions: '11" × 14"',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
    full: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1400&q=85',
    description: 'Precise marks dissolve into softness — writing as drawing, thought as line.',
    color: '#C4C4B7'
  },
  {
    id: 'piece-9',
    title: 'Blush Horizon',
    category: 'painting',
    medium: 'Oil on linen',
    dimensions: '36" × 48"',
    year: 2025,
    thumbnail: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=600&q=80',
    full: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=1400&q=85',
    description: 'An expansive field of pink and cream that invites slow, sustained looking.',
    color: '#E8D4C4'
  }
];

// --- DOM Elements ---
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const portfolioGrid = document.getElementById('portfolioGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxMeta = document.getElementById('lightboxMeta');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxInquire = document.getElementById('lightboxInquire');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentIndex = 0;
let filteredArtworks = [...artworks];

// --- Gallery Rendering ---
function renderGallery() {
  portfolioGrid.innerHTML = '';

  artworks.forEach((art, index) => {
    const card = document.createElement('div');
    card.className = 'artwork-card';
    card.dataset.category = art.category;
    card.dataset.index = index;
    card.setAttribute('data-animate', 'fade-up');

    const hasImage = art.thumbnail || art.full;

    card.innerHTML = `
      <div class="artwork-card__image-wrap">
        ${hasImage
          ? `<img class="artwork-card__image" src="${art.thumbnail || art.full}" alt="${art.title}" loading="lazy">`
          : `<div class="artwork-card__placeholder" style="background: linear-gradient(135deg, ${art.color}44, ${art.color}22)">
               <span style="color: ${art.color}">${art.title}</span>
             </div>`
        }
      </div>
      <div class="artwork-card__overlay">
        <div class="artwork-card__label">
          <div class="artwork-card__title">${art.title}</div>
          <div class="artwork-card__medium">${art.medium}</div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(index));
    portfolioGrid.appendChild(card);
  });

  observeAnimations();
}

// --- Filtering ---
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const cards = portfolioGrid.querySelectorAll('.artwork-card');

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    filteredArtworks = filter === 'all'
      ? [...artworks]
      : artworks.filter(a => a.category === filter);
  });
});

// --- Lightbox ---
function openLightbox(index) {
  currentIndex = index;
  updateLightboxContent();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightboxContent() {
  const art = artworks[currentIndex];

  if (art.full || art.thumbnail) {
    lightboxImage.src = art.full || art.thumbnail;
    lightboxImage.style.display = 'block';
  } else {
    // Show a styled placeholder
    lightboxImage.src = '';
    lightboxImage.style.display = 'none';
  }

  lightboxImage.alt = art.title;
  lightboxTitle.textContent = art.title;
  lightboxMeta.innerHTML = `${art.medium}<br>${art.dimensions} &middot; ${art.year}`;
  lightboxDesc.textContent = art.description;

  const subject = encodeURIComponent(`Inquiry about "${art.title}"`);
  lightboxInquire.href = `mailto:hello@tasfiamahmud.com?subject=${subject}`;
}

function navigateLightbox(direction) {
  const visibleIndices = filteredArtworks.map(a => artworks.indexOf(a));
  const currentPos = visibleIndices.indexOf(currentIndex);
  const newPos = (currentPos + direction + visibleIndices.length) % visibleIndices.length;
  currentIndex = visibleIndices[newPos];
  updateLightboxContent();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});

// --- Scroll-aware Navigation ---
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
      ticking = false;
    });
    ticking = true;
  }
});

// Active section tracking
const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

sections.forEach(section => sectionObserver.observe(section));

// --- Scroll Animations ---
function observeAnimations() {
  const animElements = document.querySelectorAll('[data-animate]:not(.visible)');

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  animElements.forEach(el => animObserver.observe(el));
}

// --- Mobile Menu ---
navToggle.addEventListener('click', () => {
  const isOpen = navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  observeAnimations();
});
