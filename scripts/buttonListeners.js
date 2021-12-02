// Открыть/закрыть поп-ап с профайлом
document.querySelector('.profile__edit-button').addEventListener('click', function() {
  nameInput.value = prflName.textContent;
  jobInput.value = prflJob.textContent;
  openPopup(editProfileForm)
});

document.querySelector('.popup__close-button_place_edit-profile').addEventListener('click', function() {
  closePopup(editProfileForm)
});

// Попап с добавлением карточки
document.querySelector('.profile__add-button').addEventListener('click', function() {
  openPopup(addCardForm)
});

document.querySelector('.popup__close-button_place_add-card').addEventListener('click', function() {
  closePopup(addCardForm)
});

// Закрыть попап с картинкой
document.querySelector('.popup__close-button_place_img-popup').addEventListener('click', () =>  {
  closePopup(popupWithImg);
});