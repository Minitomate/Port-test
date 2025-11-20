import './projects.css';

const projectsData = [
    { title: 'Neon Dashboard', desc: 'A futuristic dashboard for monitoring server metrics.', tags: ['React', 'D3.js', 'CSS Grid'] },
    { title: 'Cyber Commerce', desc: 'E-commerce platform with a cyberpunk aesthetic.', tags: ['Vue', 'Node.js', 'Stripe'] },
    { title: 'Agentic Chat', desc: 'AI-powered chat interface with autonomous agents.', tags: ['Vanilla JS', 'WebSockets', 'LLM'] },
];

export function renderProjects() {
    const section = document.createElement('section');
    section.className = 'projects-section';

    const title = document.createElement('h2');
    title.className = 'projects-title';
    title.textContent = 'Selected Works';
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'projects-grid';

    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        card.innerHTML = `
      <div class="project-image">${project.title[0]}</div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.desc}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    `;

        grid.appendChild(card);
    });

    section.appendChild(grid);
    return section;
}
