import './style.css';

import {hero__title_component,
    hero__img_component,
    hero__description_component} from './home';

function component() {
    const element = document.createElement('div');
 
    element.id ="content";
    element.appendChild(hero__title_component());
    element.appendChild(hero__img_component());
    element.appendChild(hero__description_component())
 
    return element;
  }

document.body.appendChild(component());
