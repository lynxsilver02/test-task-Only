const infoButtons = ['Здание 1', 'Торговый центр', 'Метро', 'Здание 2', 'Стадион', 
                    'Ресторан', 'Здание 3', 'Здание 4', 'Мост', 'Отель'];

const buttonBuilding1 = document.getElementsByClassName('button__building1')[0];
const buttonShoppingMall = document.getElementsByClassName('button__shopping-mall')[0];
const buttonMetro = document.getElementsByClassName('button__metro')[0];
const buttonBuilding2 = document.getElementsByClassName('button__building2')[0];
const buttonStadium = document.getElementsByClassName('button__stadium')[0];
const buttonRestaurant = document.getElementsByClassName('button__restaurant')[0];
const buttonBuilding3 = document.getElementsByClassName('button__building3')[0];
const buttonBuilding4 = document.getElementsByClassName('button__building4')[0];
const buttonBridge = document.getElementsByClassName('button__bridge')[0];
const buttonHotel = document.getElementsByClassName('button__hotel')[0];

const allButtons = [buttonBuilding1, buttonShoppingMall, buttonMetro, buttonBuilding2, 
                    buttonStadium, buttonRestaurant, buttonBuilding3, buttonBuilding4, 
                    buttonBridge, buttonHotel];

const block = document.getElementsByClassName('block')[0];
console.log('block: ', block);


const buttonController = (allButtons, infoButtons, event) => {
  const target = event.target;
  
  const openButton = (button, text) => {
    button.classList.add('button_active');
    button.innerHTML = `<span>-</span><span>${text}</span>`;
  }

  const closeButton = (button) => {
    button.classList.remove('button_active');
    button.innerHTML = '+';
  }

  const closeAllButtons = (buttons) => {
    for (let i = 0; i < buttons.length; i++) {
      closeButton(buttons[i]);
    }
  }

  for (let i = 0; i < allButtons.length; i++) {
    if (target === allButtons[i]) {
      if (!allButtons[i].classList.contains('button_active')) {
        openButton(allButtons[i], infoButtons[i]);
      } else {
        closeButton(allButtons[i]);
      }
      return;
    }
  }
  closeAllButtons(allButtons);
}

block.addEventListener('click', event => buttonController(allButtons, infoButtons, event));









