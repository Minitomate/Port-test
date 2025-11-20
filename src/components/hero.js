import './hero.css';

export function renderHero() {
    const section = document.createElement('section');
    section.className = 'hero';

    section.innerHTML = `
    <div class="hero-content">
      <h1 class="hero-title">TECH EXPLORER</h1>
      <h2 class="hero-subtitle">Building the Future, One Node at a Time</h2>
      <a href="#roadmap" class="hero-cta">View Roadmap</a>
    </div>
  `;

    return section;
}
