document.getElementById('btn-login').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    const email = emailField.value;
    if (email == 'shariar.ayon128@gmail.com' && password == '12345') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user');
    }
})