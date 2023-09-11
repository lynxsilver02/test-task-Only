const infoButtons = ['Здание 1', 'Торговый центр', 'Метро', 'Здание 2', 'Стадион', 
                    'Ресторан', 'Здание 3', 'Здание 4', 'Мост', 'Отель'];

const buttonBuilding1 = document.querySelector('.button__building1');
const buttonShoppingMall = document.querySelector('.button__shopping-mall');
const buttonMetro = document.querySelector('.button__metro');
const buttonBuilding2 = document.querySelector('.button__building2');
const buttonStadium = document.querySelector('.button__stadium');
const buttonRestaurant = document.querySelector('.button__restaurant');
const buttonBuilding3 = document.querySelector('.button__building3');
const buttonBuilding4 = document.querySelector('.button__building4');
const buttonBridge = document.querySelector('.button__bridge');
const buttonHotel = document.querySelector('.button__hotel');

const allButtons = [buttonBuilding1, buttonShoppingMall, buttonMetro, buttonBuilding2, 
                    buttonStadium, buttonRestaurant, buttonBuilding3, buttonBuilding4, 
                    buttonBridge, buttonHotel];

const block = document.querySelector('.block');

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

  switch (target) {
    case allButtons[0]:
      if (!allButtons[0].classList.contains('button_active')) {
        openButton(allButtons[0], infoButtons[0]);
      } else {
        closeButton(allButtons[0]);
      }
      break;
    case allButtons[1]:
      if (!allButtons[1].classList.contains('button_active')) {
        openButton(allButtons[1], infoButtons[1]);
      } else {
        closeButton(allButtons[1]);
      }
      break;
    case allButtons[2]:
      if (!allButtons[2].classList.contains('button_active')) {
        openButton(allButtons[2], infoButtons[2]);
      } else {
        closeButton(allButtons[2]);
      }
      break;
    case allButtons[3]:
      if (!allButtons[3].classList.contains('button_active')) {
        openButton(allButtons[3], infoButtons[3]);
      } else {
        closeButton(allButtons[3]);
      }
      break;
    case allButtons[4]:
      if (!allButtons[4].classList.contains('button_active')) {
        openButton(allButtons[4], infoButtons[4]);
      } else {
        closeButton(allButtons[4]);
      }
      break;
    case allButtons[5]:
      if (!allButtons[5].classList.contains('button_active')) {
        openButton(allButtons[5], infoButtons[5]);
      } else {
        closeButton(allButtons[5]);
      }
      break;
    case allButtons[6]:
      if (!allButtons[6].classList.contains('button_active')) {
        openButton(allButtons[6], infoButtons[6]);
      } else {
        closeButton(allButtons[6]);
      }
      break;
    case allButtons[7]:
      if (!allButtons[7].classList.contains('button_active')) {
        openButton(allButtons[7], infoButtons[7]);
      } else {
        closeButton(allButtons[7]);
      }
      break;
    case allButtons[8]:
      if (!allButtons[8].classList.contains('button_active')) {
        openButton(allButtons[8], infoButtons[8]);
      } else {
        closeButton(allButtons[8]);
      }
      break;
    case allButtons[9]:
      if (!allButtons[9].classList.contains('button_active')) {
        openButton(allButtons[9], infoButtons[9]);
      } else {
        closeButton(allButtons[9]);
      }
      break;
    default: closeAllButtons(allButtons);
  }
}

block.addEventListener('click', event => buttonController(allButtons, infoButtons, event));









