const email = localStorage.getItem('email')
const password = localStorage.getItem('password')
const input1 = document.getElementById('input-email')
const input2 = document.getElementById('input-password')
const checkbox = document.getElementById('checkbox')
const button = document.querySelector('form button')
button.addEventListener('click', event => {
    event.preventDefault()
    if (input1.value == email && input2.value == password) window.location.href = 'page.html'
    else {
        Swal.fire({
            icon: "warning",
            text: "Account is unavailable",
          });
    }
})