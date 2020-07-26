import colors from 'vuetify/es5/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('kireihana_dark') || false
}

const base = {
  primary: '#F98298', // primary main
  primarylight: '#F3F3F3', // primary light
  primarydark: '#EF576E', // primary dark
  secondary: '#F3A9B6', // secondary main
  secondarylight: '#F3A9B6', // secondary light
  secondarydark: '#EF576E', // secondary dark
  anchor: '#EF576E' // link
}

const palette = {
  base
}

export const theme = {
  ...palette.base
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  },
  icons: {
    iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  }
}
