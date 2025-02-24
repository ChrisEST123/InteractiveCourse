let themeButton;
let lightMode;
let darkMode;

window.addEventListener('DOMContentLoaded', function() {
    themeButton = document.querySelector('#theme-toggle');
    lightMode = document.querySelector('#mode-light');
    darkMode = document.querySelector('#mode-dark');

    checkDarkMode();

    themeButton.addEventListener('click', () => {
        const darkModeStatus = getFromLocalStorage('darkMode') === 'true';
    
        saveIntoLocalStorage('darkMode', !darkModeStatus);
        switchDarkModeButton(!darkModeStatus);    
    })
});

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function saveIntoLocalStorage(key, value) {
    return localStorage.setItem(key, value);
}

function checkDarkMode() {
    const darkModeStatus = getFromLocalStorage('darkMode') === 'true';
    switchDarkModeButton(darkModeStatus);
}

function switchDarkModeButton(darkModeStatus) {
    if (!darkModeStatus) {
        document.body.classList.remove('dark-mode');
        darkMode.style['display'] = 'none';
        lightMode.style['display'] = 'inline';

        return;
    }

    document.body.classList.add('dark-mode');
    lightMode.style['display'] = 'none';
    darkMode.style['display'] = 'inline';
}
