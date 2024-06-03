/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light', // Change this to 'light' to use the light theme by default
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FFFFFF', // Change this to your desired background color
          surface: '#FFFFFF', // Change this to your desired surface color
          primary: '#1976D2', // Primary color
          secondary: '#424242', // Secondary color
          error: '#FF5252', // Error color
          info: '#2196F3', // Info color
          success: '#4CAF50', // Success color
          warning: '#FB8C00', // Warning color
        }
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212', // Dark background color
          surface: '#121212', // Dark surface color
          primary: '#BB86FC', // Primary color for dark theme
          secondary: '#03DAC6', // Secondary color for dark theme
          error: '#CF6679', // Error color for dark theme
          info: '#2196F3', // Info color for dark theme
          success: '#4CAF50', // Success color for dark theme
          warning: '#FB8C00', // Warning color for dark theme
        }
      }
    }
  }
})

export default vuetify
