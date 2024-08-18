/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'dinks-blue': '#062e51',
                'dinks-red': '#c01422',
                'smoked-background': 'rgba(0, 0, 0, 0.5)',
            },
        },
    },
    plugins: [],
}
