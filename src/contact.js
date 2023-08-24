export function loadContactContent() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = ''; // Clear existing content

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = 'Contact Us';
    contentDiv.appendChild(contactHeading);

    // Add your contact information or form elements here
}
