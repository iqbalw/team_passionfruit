const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu');

function toggleMenu() {
  menuList.classList.toggle('isShown');
}
menuButton.addEventListener('click', toggleMenu);
