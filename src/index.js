import './style.css';

console.log('funguju!');

const navigace = document.querySelector('#nav-btn');
const nav = document.querySelector('nav');
const polozkyNavigace = document.querySelectorAll('a');

const handleNav = () => {
  nav.classList.toggle('nav-closed');
};

navigace.addEventListener('click', handleNav);

polozkyNavigace.forEach((item) => {
  item.addEventListener('click', handleNav);
});

let ordered = false;

const orderButtonElm = document.querySelector('.order-btn');
const cupElm = document.querySelector('.drink__cup');

const zrusit = () => {
  if (ordered === false) {
    orderButtonElm.textContent = 'Zrušit';
    cupElm.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    orderButtonElm.textContent = 'Objednat';
    cupElm.classList.remove('drink__cup--selected');
    ordered = false;
  }
};
orderButtonElm.addEventListener('click', zrusit);

const cappuccino = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },

  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },

  {
    color: '#613916',
    label: 'espresso',
  },
];

import { Layer } from './Layer/index.js';

const drinkElm = document.querySelector('.drink__info');
for (let i = 0; i < cappuccino.length; i++) {
  console.log(cappuccino[i]);
  drinkElm.innerHTML += Layer(cappuccino[i]);
}
