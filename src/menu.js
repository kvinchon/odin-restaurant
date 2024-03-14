function menu() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');

  const flavors = document.createElement('div');
  const flavorsTitle = document.createElement('div');
  const flavorsText = document.createElement('p');

  flavorsTitle.textContent = 'Flavors of France';
  flavorsText.textContent =
    'Paris is a melting pot, as our food can attest. Take a bite and savor la vie délicieuse!';

  const menu1 = document.createElement('div');
  const menu2 = document.createElement('div');
  const menu3 = document.createElement('div');

  const menu1Desc = document.createElement('a');
  const menu2Desc = document.createElement('a');
  const menu3Desc = document.createElement('a');

  const menu1Image = document.createElement('div');
  const menu2Image = document.createElement('div');
  const menu3Image = document.createElement('div');

  menu1Desc.textContent = 'mouthwatering appetizers';
  menu2Desc.textContent = 'wholesome mains';
  menu3Desc.textContent = 'sweet endings';

  menu1Desc.href = '#';
  menu2Desc.href = '#';
  menu3Desc.href = '#';

  flavors.appendChild(flavorsTitle);
  flavors.appendChild(flavorsText);

  menu1.appendChild(menu1Image);
  menu1.appendChild(menu1Desc);

  menu2.appendChild(menu2Image);
  menu2.appendChild(menu2Desc);

  menu3.appendChild(menu3Image);
  menu3.appendChild(menu3Desc);

  container.appendChild(flavors);
  container.appendChild(menu1);
  container.appendChild(menu2);
  container.appendChild(menu3);

  flavors.classList.add('flavors');

  menu1.classList.add('item');
  menu2.classList.add('item');
  menu3.classList.add('item');

  menu1Image.classList.add('mouthwatering');
  menu2Image.classList.add('wholesome');
  menu3Image.classList.add('sweet');

  container.classList.add('menu');

  content.appendChild(container);
}

export default menu;
