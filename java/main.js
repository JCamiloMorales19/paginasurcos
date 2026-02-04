document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("main-nav");
    
    // 1. Efecto Scroll en Nav
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("py-2", "bg-[#12376d]", "shadow-2xl");
            nav.classList.remove("py-4", "bg-[#1f60be]");
        } else {
            nav.classList.add("py-4", "bg-[#1f60be]");
            nav.classList.remove("py-2", "bg-[#12376d]", "shadow-2xl");
        }
    });

    // 2. Banner de Cookies (Lógica persistente)
    const setupCookies = () => {
        if (!localStorage.getItem('cookies_surcos_2026')) {
            // Creamos el banner dinámicamente para no ensuciar el HTML de todas las páginas
            const banner = document.createElement('div');
            banner.id = 'cookie-banner';
            banner.className = 'fixed bottom-6 left-6 right-6 md:left-auto md:max-w-sm bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 z-[100] transition-all duration-500 translate-y-20 opacity-0';
            banner.innerHTML = `
                <div class="flex items-start gap-4">
                    <div class="bg-blue-50 p-3 rounded-full text-[#1f60be]"><i class="fas fa-cookie-bite"></i></div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-sm mb-1">Privacidad</h4>
                        <p class="text-[11px] text-slate-500 mb-4 leading-relaxed">Usamos cookies para mejorar tu experiencia. Al navegar, aceptas su uso.</p>
                        <button id="accept-cookies" class="bg-[#1f60be] text-white px-4 py-2 rounded-lg text-[10px] font-bold hover:bg-blue-800 transition">Aceptar todo</button>
                    </div>
                </div>`;
            document.body.appendChild(banner);
            
            setTimeout(() => {
                banner.classList.remove('translate-y-20', 'opacity-0');
            }, 2000);

            document.getElementById('accept-cookies').addEventListener('click', () => {
                localStorage.setItem('cookies_surcos_2026', 'true');
                banner.classList.add('translate-y-20', 'opacity-0');
            });
        }
    };
    setupCookies();
});
// Lógica del Menú Móvil
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        // Alternar el menú
        mobileMenu.classList.toggle('translate-x-full');
        
        // Cambiar el icono de barras a una "X"
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
        
        // Bloquear scroll del cuerpo cuando el menú esté abierto
        document.body.classList.toggle('overflow-hidden');
    });

    // Cerrar menú al hacer clic en cualquier enlace
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
            document.body.classList.remove('overflow-hidden');
        });
    });
}