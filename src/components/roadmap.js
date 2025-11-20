import './roadmap.css';

const roadmapData = [
    { year: '2020', title: 'HTML & CSS', desc: 'Started the journey into web development. Built first static pages.', side: 'left' },
    { year: '2021', title: 'JavaScript ES6+', desc: 'Mastered the language of the web. Asynchronous programming, DOM manipulation.', side: 'right' },
    { year: '2022', title: 'React & Vue', desc: 'Dived into component-based architecture and state management.', side: 'left' },
    { year: '2023', title: 'Node.js & Backend', desc: 'Server-side logic, APIs, and database management with SQL/NoSQL.', side: 'right' },
    { year: '2024', title: 'AI & Agents', desc: 'Integrating LLMs and building autonomous agents for complex tasks.', side: 'left' },
    { year: '2025', title: 'Future Tech', desc: 'Exploring Web3, AR/VR, and beyond.', side: 'right' },
];

export function renderRoadmap() {
    const section = document.createElement('section');
    section.className = 'roadmap-section';
    section.id = 'roadmap';

    const title = document.createElement('h2');
    title.className = 'roadmap-title';
    title.textContent = 'Technological Journey';
    section.appendChild(title);

    const container = document.createElement('div');
    container.className = 'roadmap-container';

    roadmapData.forEach(item => {
        const node = document.createElement('div');
        node.className = `roadmap-node ${item.side}`;

        node.innerHTML = `
      <div class="roadmap-content">
        <div class="node-year">${item.year}</div>
        <h3 class="node-title">${item.title}</h3>
        <p class="node-desc">${item.desc}</p>
      </div>
    `;

        container.appendChild(node);
    });

    section.appendChild(container);

    // Intersection Observer for animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    setTimeout(() => {
        const nodes = container.querySelectorAll('.roadmap-node');
        nodes.forEach(node => observer.observe(node));
    }, 100);

    return section;
}
