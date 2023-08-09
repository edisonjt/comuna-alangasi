import { createTheme } from "@mui/material";
import JuliusSansOne from '../fonts/JuliusSansOne-Regular.ttf';

export const lighTheme = createTheme({
    typography: {
        fontFamily: 'Arial', // Font por defecto para la mayoría de los elementos
        h4: {
          fontFamily: 'JuliusSansOne, Arial', // Usar JuliusSansOne-Regular para h1
        },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'JuliusSansOne';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('JuliusSansOne'), local('JuliusSansOne-Regular'), url(${JuliusSansOne}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          },
        `,
      },
    },
  });
  