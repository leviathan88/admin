const input1 = document.getElementById('input-name')
const input2 = document.getElementById('input-email')
const input3 = document.getElementById('input-password')
const checkbox = document.getElementById('checkbox')
const button = document.querySelector('form button')
button.addEventListener('click', event => {
    event.preventDefault();
    if (checkbox.checked && input1.value.trim() && input2.value.trim() && input3.value.trim()) {
        localStorage.setItem('fullName', input1.value);
        localStorage.setItem('email', input2.value);
        localStorage.setItem('password', input3.value);
        window.location.href = 'next.html'
    } else alert('Error, check inputs');
});