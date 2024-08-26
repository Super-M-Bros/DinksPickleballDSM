/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontFamily: {
            header: ['Bebas Neue', 'sans-serif'],
        },
        extend: {
            colors: {
                'dinks-blue': '#062e51',
                'dinks-red': '#c01422',
                'dinks-red-dark': '#760e16',
                'dinks-green': '#225534',
                'maddie-green': 'rgba(9, 136, 67, 1)',
                'maddie-slate': 'rgba(43, 39, 57, 1)',
                'maddie-red': 'rgba(237, 32, 36, 1)',
                'maddie-cream': 'rgba(254, 252, 236, 1)',
                'smoked-background': 'rgba(0, 0, 0, 0.5)',
            },
            textShadow: {
                'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
                'md': '3px 3px 6px rgba(0, 0, 0, 0.5)',
                'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
            }
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.text-shadow': {
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                },
                '.text-shadow-md': {
                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
                },
                '.text-shadow-lg': {
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
                },
                '.text-shadow-none': {
                    textShadow: 'none',
                },
                '.text-shadow-md-green': {
                    textShadow: '3px 3px 0 rgba(9, 136, 67, 1)', // maddie-green
                },
                '.text-shadow-lg-green': {
                    textShadow: '4px 4px 0 rgba(9, 136, 67, 1)', // maddie-green
                },
                '.text-shadow-xl-green': {
                    textShadow: '5px 5px 0 rgba(9, 136, 67, 1)', // maddie-green
                },
            }

            addUtilities(newUtilities, ['responsive', 'hover'])
        }
    ],
}
