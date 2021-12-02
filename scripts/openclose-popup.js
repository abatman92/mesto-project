function openPopup(obj) {
  obj.classList.add('popup_active');
};

function closePopup(obj) {
  obj.classList.remove('popup_active');
};

const editProfileForm = document.querySelector('.popup_place_edit-profile');

document.querySelector('.profile__edit-button').addEventListener('click', function() {
  openPopup(editProfileForm)
});

document.querySelector('.popup__close-button_place_edit-profile').addEventListener('click', function() {
  closePopup(editProfileForm)
});

const addCardForm = document.querySelector('.popup_place_add-card');

document.querySelector('.profile__add-button').addEventListener('click', function() {
  openPopup(addCardForm)
});

document.querySelector('.popup__close-button_place_add-card').addEventListener('click', function() {
  closePopup(addCardForm)
});

const popupWithImg = document.querySelector('.popup_place_img-popup')


document.querySelector('.popup__close-button_place_img-popup').addEventListener('click', () =>  {
  closePopup(popupWithImg);
});