const menu = document.querySelector('#menu-button input')
const nav = document.querySelector('.navbar .nav')

menu.addEventListener('click', function () {
    nav.classList.toggle('slide')
})


function openWhatsApp() {
let numbers = ["+6285648741082","+62 81217148319"];
numbers.forEach(function(number){
window.open('https://api.whatsapp.com/send?phone=' + number);
});
}
