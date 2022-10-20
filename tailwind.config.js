/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontSize: {
                xxl: ["13rem", "10.5rem"],
            },
            fontFamily: {
                cormorant: ["Cormorant Garamond", "serif"],
            },
        },
    },
    plugins: [],
};
