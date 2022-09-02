import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#def5ff',
      100: '#b0ddff',
      200: '#80c7fe',
      300: '#51b0fd',
      400: '#289afa',
      500: '#1680e1',
      600: '#0a64b0',
      700: '#015597',
      800: '#002b4e',
      900: '#000f1e'
    }
  },
  fonts: {
    heading: `Roboto, ${base.fonts?.heading}`,
    body: `Roboto, ${base.fonts?.body}`
  }
});

export default theme;
