 // Custom Tailwind styles for repetitive elements
        const style = document.createElement('style');
        style.innerHTML = `
            .skill-pill {
                /* Changed hover to use cyan */
                @apply bg-gray-700 text-slate-100 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 cursor-default shadow-md;
            }
            .card-project {
                /* Changed hover border and shadow to use cyan */
                @apply bg-gray-800 rounded-xl shadow-2xl border border-gray-800 transition-all duration-300 hover:border-cyan-400/50 hover:scale-[1.02] overflow-hidden;
            }
            .contact-box {
                /* Changed hover border and shadow to use cyan */
                @apply bg-gray-800 p-6 rounded-xl text-center shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-400/50;
            }
        `;
        document.head.appendChild(style);


        // --- JavaScript Functionality ---

        // 1. Mobile Menu Toggle
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // 2. Scroll to Top Button Logic
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        // Show/Hide button based on scroll position
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollToTopBtn.classList.add('opacity-100', 'translate-y-0');
                scrollToTopBtn.classList.remove('opacity-0', 'translate-y-4');
            } else {
                scrollToTopBtn.classList.add('opacity-0', 'translate-y-4');
                scrollToTopBtn.classList.remove('opacity-100', 'translate-y-0');
            }
        };

        // Scroll to the top when the button is clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });