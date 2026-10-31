// API Helper untuk Berkomunikasi dengan Google Apps Script
const API = {
    async getPublic() {
        try {
            const res = await fetch(`${CONFIG.API_URL}?action=getPublic`);
            const json = await res.json();
            return json;
        } catch (err) {
            console.error("Gagal mengambil data publik:", err);
            return { ok: false, error: err.toString() };
        }
    },
    async checkin(data) {
        try {
            const res = await fetch(CONFIG.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({ action: 'checkin', ...data })
            });
            return await res.json();
        } catch (err) {
            return { ok: false, error: err.toString() };
        }
    },
    async login(email, password) {
        try {
            const res = await fetch(CONFIG.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({ action: 'login', email, password })
            });
            return await res.json();
        } catch (err) {
            return { ok: false, error: err.toString() };
        }
    }
};
