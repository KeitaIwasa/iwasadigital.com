const scriptURL = 'https://script.google.com/macros/s/AKfycbzKhe4ZJZmZdlj-bhiCeZxfcJrShiIEYDY6GJSefyYyYCNz_fJdgvKexLyNLk74PyMR7w/exec';
const form = document.getElementById('contact-form');
const thankYouMessage = document.getElementById('thank-you-message');
const button = document.querySelector('button[type="submit"]');
const buttonText = document.getElementById('button-text');
const spinner = document.getElementById('spinner');

form.addEventListener('submit', e => {
    e.preventDefault();
    buttonText.style.display = 'none';
    spinner.style.display = 'block';
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            form.style.display = 'none';
            thankYouMessage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error!', error.message);
            buttonText.style.display = 'block';
            spinner.style.display = 'none';
        });
});