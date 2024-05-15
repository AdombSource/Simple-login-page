const users = [
    { username: 'Adomb', password: 'kecske' },
    // Add more users here
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password';
    }
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? '☀' : '☾';
});
