document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginScreen = document.getElementById('loginScreen');
    const adminDashboard = document.getElementById('adminDashboard');

    // Cek sesi tersimpan
    const token = sessionStorage.getItem('admin_token');
    if (token) {
        loginScreen.style.display = 'none';
        adminDashboard.style.display = 'flex';
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('adminEmail').value;
            const password = document.getElementById('adminPassword').value;

            const res = await API.login(email, password);
            if (res.ok) {
                sessionStorage.setItem('admin_token', res.token);
                loginScreen.style.display = 'none';
                adminDashboard.style.display = 'flex';
            } else {
                alert('Login gagal: ' + res.error);
            }
        });
    }

    const btnLogout = document.getElementById('btnLogout');
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            sessionStorage.removeItem('admin_token');
            location.reload();
        });
    }
});
