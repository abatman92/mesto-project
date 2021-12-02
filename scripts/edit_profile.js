const prflName = document.querySelector('.profile__name');
const prflJob = document.querySelector('.profile__description');

const nameInput = document.querySelector('input[name=name]');
const jobInput = document.querySelector('input[name=description]');

nameInput.value = prflName.textContent;
jobInput.value = prflJob.textContent;

document.querySelector('form[name=edit-form]').addEventListener('submit', (evt) => {
  evt.preventDefault();
  nameValue = nameInput.value;
  jobValue = jobInput.value;
  prflName.textContent = nameValue;
  prflJob.textContent = jobValue;
  editProfileForm.classList.remove('popup_active');
});