const display = document.querySelector('input'),
    button = document.querySelector('button'),
    copyBtn = document.querySelector('span.far'),
    copyActiv = document.querySelector('span.fas');
let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=~`|{}[]:;><?,./-';

button.onclick = () => {
    let i, randomPassword = '';
    for (i = 0; i < 16; i++) {
        randomPassword += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    display.value = randomPassword;
};

copyBtn.addEventListener('click', function() {
    display.select();
    document.execCommand('copy');
});