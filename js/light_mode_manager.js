const switcher = document.getElementById('themeSwitcher');
const html = document.documentElement;

// check for saved preference on load
if (localStorage.getItem('theme') === 'light') {
    html.setAttribute('data-bs-theme', 'light');
    switcher.checked = true;
}

switcher.addEventListener('change', () => {
    if (switcher.checked) {
        html.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});