module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                mont: ["Montserrat"],
            },
        },
        backgroundImage: {
            main: "url('/images/bg-main.png')",
            footer: "url('/images/bg-footer.png')",
        },
        height: {
            sm: "618px",
            
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
