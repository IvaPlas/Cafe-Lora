// import './style.css';
import { Layer } from '../Layer';
export const Drink = (props) => {
  const { id, name, layers, image } = props;
  const drink = document.createElement('div');
  drink.classList.add('drink');

  drink.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
                <img
                  src="${image}"
                />
              </div>

              <div class="drink__info">
                <h3>${name}</h3>
                </div>
</div>                
<div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>
            `;

  const drinkElm = drink.querySelector('.drink__info');
  for (let i = 0; i < layers.length; i++) {
    console.log(layers[i]);
    drinkElm.innerHTML += Layer(layers[i]);
  }

  const orderButtonElm = drink.querySelector('.order-btn');
  const cupElm = drink.querySelector('.drink__cup');

  const zrusit = () => {
    if (props.ordered === false) {
      orderButtonElm.textContent = 'Zrušit';
      cupElm.classList.add('drink__cup--selected');
      props.ordered = true;
    } else {
      orderButtonElm.textContent = 'Objednat';
      cupElm.classList.remove('drink__cup--selected');
      props.ordered = false;
    }
  };
  orderButtonElm.addEventListener('click', zrusit);

  return drink;
};
