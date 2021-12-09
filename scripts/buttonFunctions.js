function openPopup(obj) {
  obj.classList.add('popup_active');
};

function closePopup(event) {
  if (event.target.classList.contains('popup__close-button') || event.target.classList.contains('popup__button')) {
    event.target.closest('.popup').classList.remove('popup_active');
  }
};

function viewImg(event) {
  if (document.querySelector('.popup__img')) {
      document.querySelector('.popup__img').remove();
    }
    popupImg = event.target.cloneNode(false);
    popupImg.classList.remove('element__image');
    popupImg.classList.add('popup__img');
    document.querySelector('.popup__caption').textContent = event.target.parentElement.querySelector('.element__caption-text').textContent;
    document.querySelector('.popup__img-container').prepend(popupImg);
    openPopup(popupWithImg);
}

function removeCard(event) {
  event.target.closest('.element').remove();
}

function likeCard(event) {
  event.target.classList.toggle('element__like_active');
}