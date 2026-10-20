// 1. Memilih tombol berdasarkan ID 'sapaButton' yang ada di HTML
const tombolSapa = document.getElementById('sapaButton');

// 2. Menambahkan 'event listener' untuk mendeteksi saat tombol di-klik oleh pengunjung
tombolSapa.addEventListener('click', function() {
    // 3. Menampilkan jendela kecil (alert) berisi teks sambutan ketika tombol diklik
    alert('Hallo! Terima kasih sudah berkunjung di website ini!');
});
