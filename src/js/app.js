import '../scss/tailwind.css';
import '../scss/app.scss';

// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

import { HeaderFN } from './shared/header';
import { HomeFN } from './components/home';

// for tailwindcss-debug-screens
if (process.env.NODE_ENV !== 'production') {
  document.body.classList.add('debug-screens');
}

(() => {
  if (document.getElementById('btn-menu')) {
    HeaderFN.toggleMenu();
  }

  if (document.getElementById('home')) {
    HomeFN.myHome();
  }
})();
