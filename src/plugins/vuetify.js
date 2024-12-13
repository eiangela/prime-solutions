import { createVuetify } from 'vuetify';

export default createVuetify({
    display: {
        mobileBreakpoint: 'sm',
        thresholds: {
            xs: 320,
            sm: 480,
            md: 768,
            lg: 960,
            xl: 1200,
            xxl: 1500,
        },
    },
    theme: {
        defaultTheme: 'primeTheme',
        themes: {
            primeTheme: {
                dark: false,
                colors: {
                    primary: '#2162e3',
                },
            },
        },
    },
});