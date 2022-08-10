var popup = document.querySelector('.popup');
var popupBtn = document.querySelector('.banner-js');
var popupClose = document.querySelector('.popup-close');
var input = popup.querySelector('input');

var mobileBurger = document.querySelector('.humburger');
var mobileClose = document.querySelector('.mobile-header__close');
var mobileHeader = document.querySelector('.mobile-header');

console.log(input);

popupBtn.addEventListener('click', function() {
    popup.classList.add('popup-open');
    input.focus();
})

popupClose.addEventListener('click', function() {
    popup.classList.remove('popup-open');
    popupBtn.focus();
})

window.addEventListener('keydown', function(event) {
    if (event.code === "Escape" && popup.classList.contains('popup-open')) {
        popup.classList.remove('popup-open');
        popupBtn.focus();
    }
    
})


mobileBurger.addEventListener('click', function() {
    mobileHeader.classList.add('mobile-header__open');
})

mobileClose.addEventListener('click', function() {
    mobileHeader.classList.remove('mobile-header__open');
})