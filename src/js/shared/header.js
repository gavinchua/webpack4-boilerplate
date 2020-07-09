export class HeaderFN {
  static toggleMobileMenu() {
    const
      btnMenu = document.getElementById('btn-menu'),
      menu = document.getElementById('menu-mobile');

    menu.classList.remove('hidden');

    btnMenu.addEventListener('click', () => {
      btnMenu.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }
}
