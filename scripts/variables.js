// Popups
const popupWithImg = document.querySelector('.popup_place_img-popup');
const editProfileForm = document.querySelector('.popup_place_edit-profile');
const addCardForm = document.querySelector('.popup_place_add-card');

// Массив с картами для пре-лода
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Перемненные для создания карт
const cardsBox = document.querySelector('.grid-elements');
const cardTemplate = document.querySelector('#card-temp').content;
const cardName = document.querySelector('input[name=card-heading]');
const cardImgLink = document.querySelector('input[name=card-link]');

// Переменные для редактирования профиля
const prflName = document.querySelector('.profile__name');
const prflJob = document.querySelector('.profile__description');

const nameInput = document.querySelector('input[name=name]');
const jobInput = document.querySelector('input[name=description]');