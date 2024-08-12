

let sandwich = document.getElementById("navigation");

let options = document.getElementById("options")

let closed = document.getElementById("close")

const showNav = () => {
    if (options.classList.contains('visible')) {
        options.classList.remove('visible');
        setTimeout(() => {
            sandwich.style.display = 'flex';
        }, 2);
        } else {
            sandwich.style.display = 'none';
            options.classList.add('visible')
        }
    sandwich.style.display = 'none';
    options.style.transition = 'right 0.3s ease';
}


const closeNav = () => {
    options.classList.remove('visible');
    sandwich.style.display = 'flex';
}


sandwich.addEventListener('click', showNav);
closed.addEventListener('click', closeNav);