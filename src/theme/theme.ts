import { extendTheme } from '@chakra-ui/react';
import colors from './colors';

const theme = extendTheme({
  fonts: {
    heading: 'montserrat',
    body: 'open sans',
  },
  colors,
});
export default theme;
