import { injectGlobal } from 'styled-components';
import { color } from './theme';

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 12px;
    height: 100vh;
  }
  body {
    background-color: ${color.secondary};
    font-family: sans-serif;
    font-size: 12px;
    margin: 0;
    min-height: 100vh;
    padding: 0;
    width: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
