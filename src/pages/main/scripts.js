var popup = document.querySelector('.popup');
var popupBtn = document.querySelector('.banner_js');
var popupClose = document.querySelector('.popup-close');
var input = popup.querySelector('input');

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