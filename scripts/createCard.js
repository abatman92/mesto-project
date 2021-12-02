function createCard(cardHeading, cardLink) {
  const cardTempCont = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImg = cardTempCont.querySelector('.element__image');
  const likeButton = cardTempCont.querySelector('.element__like');
  const removeButton = cardTempCont.querySelector('.element__delete')
  cardTempCont.querySelector('.element__caption-text').textContent = cardHeading;
  cardImg.setAttribute('src', cardLink);
  cardImg.setAttribute('alt',  cardHeading);
  cardImg.addEventListener('click', viewImg);
  likeButton.addEventListener('click', likeCard);
  removeButton.addEventListener('click', removeCard);
  cardsBox.prepend(cardTempCont);
}

initialCards.forEach(function(item) {
  createCard(item.name, item.link);
})

document.querySelector('form[name=add-card]').addEventListener('submit', (evt) => {
  evt.preventDefault();
  createCard(cardName.value, cardImgLink.value);
  cardName.value = "";
  cardImgLink.value = "";
  closePopup(addCardForm);
});