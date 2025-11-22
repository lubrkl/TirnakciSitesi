document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');

    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

           
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            if(name && date && time) {
                
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
                successMessage.innerHTML = `Teşekkürler <strong>${name}</strong>!<br>${date} günü saat ${time} için talebin alındı.`;
            }
        });
    }

});
