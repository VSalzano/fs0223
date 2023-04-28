const navbar = document.querySelector('.topbar');
const link = document.querySelector('#start')
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('white-bar')
        link.classList.add('green-link')
    } else {
        navbar.classList.remove('white-bar')
        link.classList.remove('green-link')
    }
};