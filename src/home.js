import menu from './menu.js';

function homepage() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');

  const brand = document.createElement('div');
  const title = document.createElement('div');
  const menuBtn = document.createElement('button');

  brand.textContent = 'La Lune french bistro';
  title.textContent = 'A taste of Paris';
  menuBtn.textContent = 'Dine with Us';

  brand.classList.add('brand');
  title.classList.add('title');
  menuBtn.classList.add('dineBtn');

  menuBtn.addEventListener('click', () => {
    content.innerHTML = '';
    menu();
  });

  container.appendChild(brand);
  container.appendChild(title);
  container.appendChild(menuBtn);
  container.classList.add('home');

  content.appendChild(container);
}

export default homepage;
