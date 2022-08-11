/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Josefin: ["Josefin Sans", "sans-serif"],
                Monoton: ["Monoton", "cursive"],
                Play: ["Playfair Display", "serif"],
                Montserrat: ["Montserrat", "sans-serif"],
                figtree: ["Figtree", "sans-serif"],
            },
            fontSize: {
                medium: ["12rem", "1rem"],
                big: ["15rem", "1rem"],
                huge: ["35rem", "1rem"],
            },
            colors: { ash: "#333" },
        },
    },
    plugins: [],
};
