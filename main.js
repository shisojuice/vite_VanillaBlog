const toggle = document.getElementById('darkmodebtn');
const body = document.body;
window.addEventListener('load', () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
        body.classList.add('darkmode');
    }
    toggleChange();
});

toggle.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    toggleChange();
    localStorage.setItem('darkmode', body.classList.contains('darkmode'));
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        body.classList.add('darkmode');
    } else {
        body.classList.remove('darkmode');
    }
    toggleChange();
    localStorage.setItem('darkmode', body.classList.contains('dark-mode'));
});

const toggleChange = () => {
    toggle.textContent = body.classList.contains('darkmode') ? 'L' : 'D';
}

const storedDark = localStorage.getItem('darkmode');
if (storedDark !== null) {
    body.classList.toggle('darkmode', storedDark === 'true');
    toggleChange();
}