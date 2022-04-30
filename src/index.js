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

// let ordered = false;

// const orderButtonElm = document.querySelector('.order-btn');
// const cupElm = document.querySelector('.drink__cup');

// const zrusit = () => {
//   if (ordered === false) {
//     orderButtonElm.textContent = 'Zrušit';
//     cupElm.classList.add('drink__cup--selected');
//     ordered = true;
//   } else {
//     orderButtonElm.textContent = 'Objednat';
//     cupElm.classList.remove('drink__cup--selected');
//     ordered = false;
//   }
// };
// orderButtonElm.addEventListener('click', zrusit);

// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },

//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },

//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];

// import { Layer } from './Layer/index.js';

// const drinkElm = document.querySelector('.drink__info');
// for (let i = 0; i < layers.length; i++) {
//   console.log(layers[i]);
//   drinkElm.innerHTML += Layer(layers[i]);
// }

import { Drink } from './Drink/index.js';

const romano = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'mango',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
  image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
};

const drinksListElm = document.querySelector('.drinks-list');
drinksListElm.appendChild(Drink(romano));
