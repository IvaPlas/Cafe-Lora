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
