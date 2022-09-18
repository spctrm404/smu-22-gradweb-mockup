const scrollUpBtn = document.querySelector('#scrollUpBtn');
const menuBar = document.querySelector('#menuBar');
scrollUpBtn.addEventListener('click', (e) => {
  menuBar.scrollIntoView({ behavior: 'smooth' });
});
