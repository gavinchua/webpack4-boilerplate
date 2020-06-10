export class headerFN {
  toggleMenu() {
    const
      btnMenu = document.getElementById('btn-menu'),
      menu = document.getElementById('menu-mobile');

    btnMenu.addEventListener('click', () => {
      btnMenu.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }
}
