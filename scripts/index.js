let profileEditButton = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close-btn');
let profileTitle = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');
let popupBtn = document.querySelector('.popup__btn');
let popupName = document.querySelector('.popup__input_type_name');
let popupDescription = document.querySelector('.popup__input_type_description');
let formSubmit = document.querySelector('.popup__form-submit');

function popupOpen() {
    popup.classList.add('popup_opened');
    popupName.textContent  = profileTitle.value
    profileText.textContent = popupDescription.value;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function submit (evt) {
    evt.preventDefault();
    profileTitle.textContent = popupName.value;
    profileText.textContent = popupDescription.value;
    popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', popupOpen);
popupCloseBtn.addEventListener('click', popupClose);
formSubmit.addEventListener('submit', submit);