const h1 = document.querySelector('h1')
password = localStorage.getItem('password')
h1.innerHTML = `This is your password - ${password}`