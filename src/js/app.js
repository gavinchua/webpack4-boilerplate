import '../scss/tailwind.css';
import '../scss/app.scss';

// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

import { HeaderFN } from './shared/header';
import { HomeFN } from './components/home';

(() => {
  ['orientationchange', 'resize'].forEach((e) => {
    window.addEventListener(e, () => location.reload(), false);
  });

  if (document.getElementById('btn-menu')) {
    HeaderFN.toggleMenu();
  }

  if (document.getElementById('home')) {
    HomeFN.myHome();
  }
})();
