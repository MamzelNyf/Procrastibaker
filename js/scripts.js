let sheCodes = false;

function changeColour() {
    // console.log(sheCodes)
    if (sheCodes === false) {
        document.documentElement.style.setProperty('--dark', '#320b3d');
        document.documentElement.style.setProperty('--medium', '#591d69');
        document.documentElement.style.setProperty('--light', '#c866cc');
        document.documentElement.style.setProperty('--white', '#fbecf0');
        document.documentElement.style.setProperty('--accent', '#ff8124');
        sheCodes = true
    } else {
        document.documentElement.style.setProperty('--dark', '#373A53');
        document.documentElement.style.setProperty('--medium', '#6b72af');
        document.documentElement.style.setProperty('--light', '#91caae');
        document.documentElement.style.setProperty('--white', '#fff');
        document.documentElement.style.setProperty('--accent', '#EC8C83');
        sheCodes = false
    }
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});