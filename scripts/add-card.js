document.querySelector('form[name=add-card]').addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardTempCont = cardTemplate.querySelector('.element').cloneNode(true);
  const cardName = document.querySelector('input[name=card-heading]');
  const cardImgLink = document.querySelector('input[name=card-link]');
  cardTempCont.querySelector('.element__caption-text').textContent = cardName.value;
  cardTempCont.querySelector('.element__image').setAttribute('src',  cardImgLink.value);
  cardTempCont.querySelector('.element__image').setAttribute('alt',  cardName.value);
  cardsBox.prepend(cardTempCont);
  cardImgLink.value = '';
  cardName.value = '';
  closePopup(addCardForm)
});