import { createVuetify } from 'vuetify';

export default createVuetify({
    display: {
        mobileBreakpoint: 'sm',
        thresholds: {
            xs: 320,
            sm: 480,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1500,
        },
    },
});