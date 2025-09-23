
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = Array.from(document.querySelectorAll('[data-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-panel]'));
  function activate(i){
    tabButtons.forEach((b,idx)=> b.classList.toggle('active', idx===i));
    panels.forEach((p,idx)=> p.style.display = (idx===i?'block':'none'));
    // update WhatsApp link text
    const price = panels[i].getAttribute('data-price') || '';
    const name = tabButtons[i].textContent.trim();
    const href = document.getElementById('wa-btn').dataset.base + encodeURIComponent(`Olá! Quero o ${name} (${price}).`);
    document.getElementById('wa-btn').setAttribute('href', href);
  }
  tabButtons.forEach((btn,i)=> btn.addEventListener('click', ()=> activate(i)));
  activate(0);
});
