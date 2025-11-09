let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => { 
menuIcon.classList.toggle('bx-x') 
navbar.classList.toggle('active'); 
}

function updateFooterYear() {
    const yearFooter = document.getElementById('year');
    if (yearFooter) yearFooter.textContent = new Date().getFullYear();

}
