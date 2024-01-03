var btnMenu = document.getElementById('btnMenu');
var navbar = document.getElementById('navbar');
var body = document.body;

btnMenu.addEventListener('click', () => {
    [btnMenu, navbar, body].forEach(element => {
        element.classList.toggle('active');
    });
});
