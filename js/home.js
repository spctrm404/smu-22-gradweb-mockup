window.addEventListener('load', () => {
  setTimeout(() => {
    scrollUpBtn.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, 1);
});
const scrollUpBtn = document.querySelector('#scrollUpBtn');
const menuBar = document.querySelector('#menuBar');
scrollUpBtn.addEventListener('click', (e) => {
  menuBar.scrollIntoView({ behavior: 'smooth' });
});
const poster = document.querySelector('#poster');
const homeBtn = document.querySelector('#homeBtn');
homeBtn.addEventListener('click', (e) => {
  poster.scrollIntoView({ behavior: 'smooth' });
});
