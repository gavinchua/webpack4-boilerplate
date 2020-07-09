import '../scss/tailwind.css';
import '../scss/app.scss';

// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

import { HeaderFN } from './shared/header';
import { HomeFN } from './components/home';

(() => {
  if (document.getElementById('btn-menu')) {
    HeaderFN.toggleMenu();
  }

  if (document.getElementById('home')) {
    HomeFN.myHome();
  }
})();
