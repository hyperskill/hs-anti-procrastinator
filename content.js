// Create and add styles
const style = document.createElement('style');
style.textContent = `
  .anti-tiktok-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    font-family: Arial, sans-serif;
  }

  .anti-tiktok-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .anti-tiktok-message {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  .anti-tiktok-button {
    background: #6B4EFF;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  .anti-tiktok-button:hover {
    background: #5A3FE6;
  }
`;
document.head.appendChild(style);

// Create overlay
const overlay = document.createElement('div');
overlay.className = 'anti-tiktok-overlay';
overlay.innerHTML = `
  <div class="anti-tiktok-content">
    <div class="anti-tiktok-message">
      Time to learn, don't procrastinate 😊
    </div>
    <button class="anti-tiktok-button">
      Go to Hyperskill
    </button>
  </div>
`;

// Add overlay to page
document.body.appendChild(overlay);

// Button click handler
overlay.querySelector('.anti-tiktok-button').addEventListener('click', () => {
  window.location.href = 'https://hyperskill.org';
});
