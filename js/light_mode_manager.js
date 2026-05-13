const switcher = document.getElementById('themeSwitcher');
const labelSwitcher = document.getElementById('switch-mode');
const html = document.documentElement;

// check for saved preference on load
if (localStorage.getItem('theme') === 'light') {
    html.setAttribute('data-bs-theme', 'light');
    switcher.checked = true;
    labelSwitcher.innerText = 'Modo Oscuro';
}

switcher.addEventListener('change', () => {
    if (switcher.checked) {
        html.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
        labelSwitcher.innerText = 'Modo Oscuro';
    } else {
        html.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        labelSwitcher.innerText = 'Modo Claro';
    }
});