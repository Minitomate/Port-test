import './contact.css';

export function renderContact() {
    const section = document.createElement('section');
    section.className = 'contact-section';

    section.innerHTML = `
    <h2 class="contact-title">Let's Build Something</h2>
    
    <div class="contact-container">
      <form class="contact-form" action="mailto:example@email.com" method="POST" enctype="text/plain">
        <div class="form-group">
          <label for="name" class="form-label">Name</label>
          <input type="text" id="name" name="name" class="form-input" required placeholder="Your Name">
        </div>
        
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" name="email" class="form-input" required placeholder="your@email.com">
        </div>
        
        <div class="form-group">
          <label for="message" class="form-label">Message</label>
          <textarea id="message" name="message" class="form-textarea" required placeholder="Tell me about your project..."></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>

    <div class="contact-links">
      <a href="#" class="contact-link">GitHub</a>
      <a href="#" class="contact-link">LinkedIn</a>
      <a href="#" class="contact-link">Email</a>
    </div>
    <p class="footer-text">© 2025 Tech Portfolio. Built with Vite & Vanilla JS.</p>
  `;

    return section;
}
