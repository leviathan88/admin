const page = window.location.pathname;
const login = document.getElementById('login');
const register = document.getElementById('register');

if (page.includes('login.html')) {
    login.style.color = '#fff'
    login.style.backgroundColor = 'var(--main)'
    login.style.border = '1px solid var(--main)'
    register.style.color = 'var(--main)'
    register.style.backgroundColor = '#fff'
    register.style.border = '1px solid #fff'
}

else if (page.includes('register.html')) {
    register.style.color = '#fff'
    register.style.backgroundColor = 'var(--main)'
    register.style.border = '1px solid var(--main)'
    login.style.color = 'var(--main)'
    login.style.backgroundColor = '#fff'
    login.style.border = '1px solid #fff'
}