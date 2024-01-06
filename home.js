
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const user = document.getElementById('user');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            activateSection(targetId);
            setActiveLink(this);
        });
    });

    function activateSection(targetId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    function setActiveLink(activeLink) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        activeLink.classList.add('active');
    }

    function showUserInfo(userId) {
        // Hide all user-info elements
        document.querySelectorAll('.user-info').forEach(info => {
            info.style.display = 'none';
        });

        // Show the user-info element associated with the clicked user
        const userInfo = document.getElementById(`${userId}-info`);
        if (userInfo) {
            userInfo.style.display = 'block';
        }
    }

    showUserInfo()
});