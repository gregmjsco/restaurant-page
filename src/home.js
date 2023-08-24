import './style.css';

const component = () => {
    const element = document.createElement('div');
 
    element.id ="content";
 
  }

function hero__title_component() {
    const hero__title = document.createElement('h1');
    hero__title.innerHTML = "Gyu-tan Restaurant Ouji";
    hero__title.classList.add('hero__title');

    return hero__title;
}

function hero__img_component() {
    const hero__img = document.createElement('img');
    hero__img.src = "https://live.staticflickr.com/563/32650990614_dc2dc9753b_z.jpg";
    hero__img.classList.add('hero__img');

    return hero__img;
}

function hero__description_component() {
    const hero__description = document.createElement('p');
    hero__description.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi in porro inventore, reiciendis eius architecto itaque dolor, sit rerum maxime provident at. Reiciendis sequi, culpa harum accusamus fugiat dolorem odit.";
    hero__description.classList.add('hero__description');

    return hero__description;
}




export function initializePage() {
    const contentDiv = document.querySelector('#content');

    // Create and append your initial elements here
    const title = hero__title_component();
    contentDiv.appendChild(title);

    const img = hero__img_component();
    contentDiv.appendChild(img);

    const description = hero__description_component();
    contentDiv.appendChild(description);
}
