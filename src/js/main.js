import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import scrollToTop from './modules/scrollToTop';
import animation from './modules/animation';
import preloader from './modules/preloader';
import menuActive from './modules/menuActive';
import fixedMenu from './modules/fixedMenu';
import backToTop from './modules/backToTop';

ieFix();
vhFix();
actualYear();
preloader.init();
menuActive.init();
fixedMenu.init();
scrollToAnchor.init();
scrollToTop.init();
backToTop.init();
animation.init();

header.init();
lazyLoading.init();
