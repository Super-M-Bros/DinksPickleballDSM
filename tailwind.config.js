/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'dinks-blue': '#062e51',
                'dinks-red': '#c01422',
                'dinks-red-dark': '#760e16',
                'dinks-green': '#225534',
                'smoked-background': 'rgba(0, 0, 0, 0.5)',
            },
        },
    },
    plugins: [],
}
