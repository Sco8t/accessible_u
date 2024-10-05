document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    dropdownToggle.addEventListener('keydown', function (event) {

        if (event.key === 'Enter') {
            event.preventDefault(); 
            const dropdownMenu = this.nextElementSibling;
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none'; 
            } else {
                dropdownMenu.style.display = 'block';
            }
        }
    });
});