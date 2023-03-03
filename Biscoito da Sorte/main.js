const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnOpen = document.querySelector('#open');
const btnTryAgain = document.querySelector('#tryAgain');

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
};

function openCookie() {
  toggleScreen();
};

function tryAgain() {
  toggleScreen();
};

function tryAgainEnter(enter) {
  if(enter.key == 'Enter' && screen1.classList.contains('hide')) {
    toggleScreen();
  };
};

btnOpen.addEventListener('click', openCookie);
btnTryAgain.addEventListener('click', tryAgain);
document.addEventListener('keypress', tryAgainEnter);