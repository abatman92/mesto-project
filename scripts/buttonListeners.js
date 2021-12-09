// Открыть popup с профайлом
document.querySelector('.profile__edit-button').addEventListener('click', function() {
  nameInput.value = prflName.textContent;
  jobInput.value = prflJob.textContent;
  openPopup(editProfileForm)
});


// Попап с добавлением карточки
document.querySelector('.profile__add-button').addEventListener('click', function() {
  openPopup(addCardForm)
});

// Закрыть попапы
document.querySelector('.page').addEventListener('click', function(event) {
  closePopup(event)
});