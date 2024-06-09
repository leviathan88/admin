const h2 = document.querySelector('h2')
const fullName = localStorage.getItem('fullName');
h2.innerHTML = `Welcome to our page ${fullName}`