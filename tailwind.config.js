var config = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.25rem',
                sm: '1.5rem',
                lg: '2rem',
                xl: '2.5rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1200px',
                '2xl': '1280px',
            },
        },
        extend: {
            colors: {
                brand: {
                    50: '#eef6ff',
                    100: '#d9eaff',
                    200: '#bcd9ff',
                    300: '#8ec1ff',
                    400: '#599dff',
                    500: '#3478f6',
                    600: '#1f5aeb',
                    700: '#1846d8',
                    800: '#1a3aae',
                    900: '#1b3589',
                    950: '#142253',
                },
                accent: {
                    400: '#34d3a6',
                    500: '#10b981',
                    600: '#059669',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
                display: ['"Sora"', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            boxShadow: {
                glow: '0 0 40px -10px rgba(52, 120, 246, 0.45)',
                card: '0 10px 30px -12px rgba(15, 23, 42, 0.25)',
            },
            backgroundImage: {
                'grid-light': 'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
                'grid-dark': 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'gradient-x': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                shimmer: {
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.6s ease-out both',
                float: 'float 6s ease-in-out infinite',
                'gradient-x': 'gradient-x 6s ease infinite',
            },
        },
    },
    plugins: [],
};
export default config;
