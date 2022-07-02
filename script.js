let home = document.getElementById('home-tab');
const about = document.getElementById('about-tab');
const contact = document.getElementById('contact-tab');

const home_div = document.getElementById('home-div');
const about_div = document.getElementById('about-div');
const contact_div = document.getElementById('contact-div');

home.addEventListener('click', function() {
    home_div.style.display = 'block'
    about_div.style.display = 'none';
    contact_div.style.display = 'none';
});

about.addEventListener('click', function() {
    about_div.style.display = 'block';
    home_div.style.display = 'none';
    contact_div.style.display = 'none';
});

contact.addEventListener('click', function() {
    contact_div.style.display = 'block';
    home_div.style.display = 'none';
    about_div.style.display = 'none';
});

