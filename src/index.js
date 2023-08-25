import './style.css';

import { initializePage} from './home';
import { loadContactContent } from './contact';
import { loadMenuContent } from './menu';

initializePage();

const homeTab = document.querySelector('#homeTab');
const contactTab = document.querySelector('#contactTab');
const menuTab = document.querySelector('#menuTab');

// Event listeners for tab clicks
homeTab.addEventListener('click', () => {
    initializePage();
});

contactTab.addEventListener('click', () => {
    loadContactContent();
});

menuTab.addEventListener('click', () => {
    loadMenuContent();
});
