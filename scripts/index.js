let profile__editButton = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popup__close = document.querySelector('.popup__close-btn');
let profile__title = document.querySelector('.profile__title');
let profile__text = document.querySelector('.profile__text');
let popup__btn = document.querySelector('.popup__btn');
let popup__name = document.querySelector('.popup__name');
let popup__description = document.querySelector('.popup__description');

function popupOpen() {
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmit (evt) {
    profile__title.textContent = popup__name.value;
    profile__text.textContent = popup__description.value;
    popup.classList.remove('popup_opened');
}

profile__editButton.addEventListener('click', popupOpen);
popup__close.addEventListener('click', popupClose);
popup__btn.addEventListener('click', formSubmit);