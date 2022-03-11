hb = document.querySelector('#hamburgerBtn');
myNav = document.querySelector('#pageWrapper');
hb.addEventListener('click', () => {
    myNav.classList.toggle('open');
});

