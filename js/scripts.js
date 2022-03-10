hb = document.querySelector('#hamburgerBtn');
myNav = document.querySelector('BODY');
hb.addEventListener('click', () => {
    myNav.classList.toggle('open');
});

