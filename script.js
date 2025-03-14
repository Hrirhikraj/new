function handleLogin(event) {
    event.preventDefault();
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Placeholder for actual authentication logic
    console.log(`Role: ${role}, Username: ${username}, Password: ${password}`);

    // Redirect based on role
    if (role === 'hospital') {
        window.location.href = 'hospital.html';
    } else if (role === 'user') {
        window.location.href = 'user.html';
    } else if (role === 'doctor') {
        window.location.href = 'doctor.html';
    }
}
