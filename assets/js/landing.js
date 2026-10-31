document.addEventListener('DOMContentLoaded', async () => {
    // Pengatur Ukuran Huruf A-/A+
    let currentSize = 16;
    document.getElementById('fontInc').addEventListener('click', () => {
        if(currentSize < 22) {
            currentSize += 2;
            document.documentElement.style.setProperty('--font-size-base', currentSize + 'px');
        }
    });
    document.getElementById('fontDec').addEventListener('click', () => {
        if(currentSize > 14) {
            currentSize -= 2;
            document.documentElement.style.setProperty('--font-size-base', currentSize + 'px');
        }
    });

    // Handle Form Check-in
    const checkinForm = document.getElementById('checkinForm');
    if (checkinForm) {
        checkinForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const nama = document.getElementById('checkinName').value;
            const ibadah = document.getElementById('checkinIbadah').value;
            const tanggal = new Date().toISOString().split('T')[0];

            const result = await API.checkin({ nama, ibadah, tanggal });
            if (result.ok) {
                alert('Check-in berhasil dicatat. Tuhan memberkati!');
                checkinForm.reset();
            } else {
                alert('Gagal check-in: ' + result.error);
            }
        });
    }

    // Ambil Data Publik
    const response = await API.getPublic();
    if (response.ok && response.data) {
        console.log("Data berhasil dimuat:", response.data);
    }
});
