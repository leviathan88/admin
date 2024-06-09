const h1 = document.querySelector('h1')
password = localStorage.getItem('password')
h1.innerHTML = `Your password is ${password}`