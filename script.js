document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');

    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Sayfanın yenilenmesini engeller

            // Normalde burada verileri bir sunucuya göndeririz.
            // Bu bir örnek olduğu için sadece mesaj gösteriyoruz.
            
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            if(name && date && time) {
                // Formu gizle, başarı mesajını göster
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
                successMessage.innerHTML = `Teşekkürler <strong>${name}</strong>!<br>${date} günü saat ${time} için talebin alındı.`;
            }
        });
    }
});