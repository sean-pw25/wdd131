const hamButton = document.querySelector('#hamburger-menu');
const navigation = document.querySelector('.navigation');
const year = document.querySelector('#current-year');

year.innerHTML = `${new Date().getFullYear()}`;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})

let visitCounter = parseInt(localStorage.getItem("visitCounter")) || 0;
visitCounter += 1
localStorage.setItem("visitCounter", visitCounter);
