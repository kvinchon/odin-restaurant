import './style.css';
import homepage from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const tabs = document.querySelectorAll('nav > button');
const content = document.querySelector('#content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    content.innerHTML = '';
    switch (tab.name) {
      case 'home':
        homepage();
        break;
      case 'menu':
        menu();
        break;
      case 'contact':
        contact();
        break;
      default:
        break;
    }
  });
});

homepage();
