import './style.css';
import { renderHero } from './components/hero.js';
import { renderRoadmap } from './components/roadmap.js';
import { renderProjects } from './components/projects.js';
import { renderContact } from './components/contact.js';
import { initCursor } from './components/cursor.js';

const app = document.querySelector('#app');
app.innerHTML = ''; // Clear loading
app.appendChild(renderHero());
app.appendChild(renderRoadmap());
app.appendChild(renderProjects());
app.appendChild(renderContact());

initCursor();


