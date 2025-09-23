
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = Array.from(document.querySelectorAll('[data-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-panel]'));
  function activate(i){
    tabButtons.forEach((b,idx)=> b.classList.toggle('active', idx===i));
    panels.forEach((p,idx)=> p.style.display = (idx===i?'block':'none'));
  }
  tabButtons.forEach((btn,i)=> btn.addEventListener('click', ()=> activate(i)));
  activate(0);
});
