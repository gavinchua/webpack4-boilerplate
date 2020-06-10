import '../scss/tailwind.css';
import '../scss/app.scss';

// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

import { headerFN } from './shared/header';
import { homeFN } from './components/home';

(() => {
  ['orientationchange', 'resize'].forEach((e) => {
    window.addEventListener(e, () => location.reload(), false);
  });

  if (document.getElementById('btn-menu')) {
    new headerFN().toggleMenu();
  }

  if (document.getElementById('home')) {
    new homeFN().myHome();
  }
})();
