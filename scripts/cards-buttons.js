document.querySelector('.grid-elements').addEventListener('click', (event) => {
  if (event.target.classList.contains('element__like')) {
    event.target.classList.toggle('element__like_active');
  };
  if (event.target.parentElement.classList.contains('element__delete') || event.target.classList.contains('element__delete') || event.target.parentElement.parentElement.classList.contains('element__delete')) {
    event.target.closest('.element').remove();
  }
  if (event.target.classList.contains('element__image')) {
    if (document.querySelector('.popup__img')) {
      document.querySelector('.popup__img').remove();
    }
    popupImg = event.target.cloneNode(false);
    popupImg.classList.remove('element__image');
    popupImg.classList.add('popup__img');
    document.querySelector('.popup__caption').textContent = event.target.parentElement.querySelector('.element__caption-text').textContent;
    document.querySelector('.popup__img-container').prepend(popupImg);
    document.querySelector('.popup_place_img-popup').classList.add('popup_active');
  }
})