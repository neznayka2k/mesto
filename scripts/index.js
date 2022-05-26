const editProfileButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const closePopupButton = popup.querySelector('.popup__close-button')
const profileTitle = document.querySelector('.profile__title')
const profileSubtitle = document.querySelector('.profile__subtitle')
const popupInputName = popup.querySelector('.popup__input.popup__name')
const popupInputProfession = popup.querySelector('.popup__input.popup__profession')
const popupSumbit = popup.querySelector('.popup__sumbit')

editProfileButton.addEventListener('click', openPopup)
closePopupButton.addEventListener('click', closePopup)
popup.addEventListener('click', closePopup)
popupSumbit.addEventListener('click', editProfile)

function openPopup() {
  popup.classList.add('popup_opened')
  popupInputName.value = profileTitle.textContent
  popupInputProfession.value = profileSubtitle.textContent
}

function closePopup(evt) {
  if (evt.target === evt.currentTarget) {
    popup.classList.remove('popup_opened')
  }
}

function editProfile(evt) {
  evt.preventDefault()
  profileTitle.textContent = popupInputName.value
  profileSubtitle.textContent = popupInputProfession.value
  closePopup(evt)
}

// temporarily (Доп. работа)
const likeButtons = document.querySelectorAll('.cards__like-button')

likeButtons.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.toggle('cards__like-button_active')
  })
})