let themeButton;
let lightMode;
let darkMode;

window.addEventListener('DOMContentLoaded', function() {
    themeButton = document.querySelector('#theme-toggle');
    lightMode = document.querySelector('#mode-light');
    darkMode = document.querySelector('#mode-dark');

    checkDarkMode();

    themeButton.addEventListener('click', () => {
        const darkModeStatus = getFromLocalStorage('darkMode');

        console.log(darkModeStatus);
    
        switchDarkModeButton(darkModeStatus);
    
        if (!darkModeStatus) {
            saveIntoLocalStorage('darkMode', true);
    
            return;
        }
    
        saveIntoLocalStorage('darkMode', false);
    })
});

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function saveIntoLocalStorage(key, value) {
    console.log(key);
    console.log(value);
    return localStorage.setItem(key, value);
}

function checkDarkMode() {
    const darkModeStatus = getFromLocalStorage('darkMode');

    switchDarkModeButton(darkModeStatus);

    return darkModeStatus;
}

function switchDarkModeButton(darkModeStatus) {
    if (!darkModeStatus) {
        darkMode.style['display'] = 'none';
        lightMode.style['display'] = 'inline';

        return;
    }

    lightMode.style['display'] = 'none';
    darkMode.style['display'] = 'inline';
}
