const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const button = document.querySelector('button')
const fullName = localStorage.getItem('fullName');
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');
p1.innerHTML = `Your full name : ${fullName}`
p2.innerHTML = `Your email address : ${email}`
p3.innerHTML = `Your password : ${password}`
button.addEventListener('click', () => {
    localStorage.clear()
    alert('Account deleted')
    window.location.href = 'register.html'
})