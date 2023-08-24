export function loadMenuContent() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = ''; // Clear existing content

    const menuHeading = document.createElement('h2');
    menuHeading.textContent = 'Our Menu';
    contentDiv.appendChild(menuHeading);

    // Add your menu items or description here
}