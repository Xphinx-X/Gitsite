(function() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const fab = document.getElementById('fab');
    const logoBtn = document.getElementById('logo-btn');
    const customizer = document.getElementById('customizer');
    const glitchText = document.querySelector('.glitch');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    if (glitchText) {
        let hoverTimer;
        
        glitchText.addEventListener('mouseenter', () => {
            hoverTimer = setTimeout(() => {
                glitchText.classList.add('active');
            }, 5000);
        });
        
        glitchText.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimer);
            glitchText.classList.remove('active');
        });
    }

    function hexToHSL(hex) {
        let r = parseInt(hex.slice(1, 3), 16) / 255;
        let g = parseInt(hex.slice(3, 5), 16) / 255;
        let b = parseInt(hex.slice(5, 7), 16) / 255;

        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                case g: h = ((b - r) / d + 2) / 6; break;
                case b: h = ((r - g) / d + 4) / 6; break;
            }
        }
        return { h: h * 360, s: s * 100, l: l * 100 };
    }

    function HSLToHex(h, s, l) {
        s /= 100;
        l /= 100;
        const a = s * Math.min(l, 1 - l);
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    function adjustColor(hex, lightness) {
        const hsl = hexToHSL(hex);
        return HSLToHex(hsl.h, hsl.s, lightness);
    }

    const savedColor = localStorage.getItem('accentColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--accent', savedColor);
        document.documentElement.style.setProperty('--accent-hover', adjustColor(savedColor, 70));
        document.documentElement.style.setProperty('--accent-light', adjustColor(savedColor, 75));
        document.documentElement.style.setProperty('--accent-lighter', adjustColor(savedColor, 85));
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.color === savedColor);
        });
    }

    if (fab) {
        const isMainPage = window.location.href.includes('index.html') || 
                           window.location.href.endsWith('/') || 
                           window.location.href.endsWith('/GitsiteX');
        
        if (isMainPage && logoBtn) {
            logoBtn.addEventListener('click', (e) => {
                e.preventDefault();
                fab.classList.toggle('visible');
                customizer.classList.remove('open');
            });
            
            fab.addEventListener('click', () => {
                fab.classList.remove('visible');
                customizer.classList.toggle('open');
            });
        } else {
            fab.classList.add('visible');
            fab.addEventListener('click', () => {
                customizer.classList.toggle('open');
            });
        }
    }

    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.color;
            document.documentElement.style.setProperty('--accent', color);
            document.documentElement.style.setProperty('--accent-hover', adjustColor(color, 70));
            document.documentElement.style.setProperty('--accent-light', adjustColor(color, 75));
            document.documentElement.style.setProperty('--accent-lighter', adjustColor(color, 85));
            localStorage.setItem('accentColor', color);
            
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (customizer && fab && !customizer.contains(e.target) && !fab.contains(e.target)) {
            customizer.classList.remove('open');
        }
    });
})();
