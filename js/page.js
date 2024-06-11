const h2 = document.querySelector('h2')
const button = document.getElementById('btn')
const fullName = localStorage.getItem('fullName');
h2.innerHTML = `Welcome to our page ${fullName}`
button.addEventListener('click', () => {
    localStorage.clear()
    alert('Account deleted')
    window.location.href = 'register.html'
})