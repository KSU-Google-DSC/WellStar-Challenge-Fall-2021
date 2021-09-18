module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: { // default == base
    extend: {
      colors: {
        white: { base: '#fafbfd' },
        purple: { base: '#8347ad' },
        blue: { base: '#0086b4' },
        black: { base: '#30363c' },
        background: {
          base: '#fafbfd',
          altLight: '#edf1f5',
          altMedium: '#dce3eb',
          purple: '#8347ad'
        },
        feedbackStatus: {
          success: '#3dae2b',
          warning: '#f3c300',
          error: '#d7282f'
        },
        interactive: {
          base: '#0086b4',
          hover: '#006b90',
          focus: '#00a7e1'
        },
        text: {
          base: '#3c444b',
          subdued: '#5e6a75',
          links: '#0086b4'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
