document.querySelector('form[name=edit-form]').addEventListener('submit', (evt) => {
  evt.preventDefault();
  nameValue = nameInput.value;
  jobValue = jobInput.value;
  prflName.textContent = nameValue;
  prflJob.textContent = jobValue;
  closePopup(editProfileForm)
});