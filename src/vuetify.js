import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
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
})