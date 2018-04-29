import { injectGlobal } from 'styled-components';
import { color } from './theme';

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 12px;
    height: 100vh;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 12px;
    min-height: 100vh;
    width: 100%;
    font-family: sans-serif;
    color: ${color.primary};
    background-color: ${color.secondary};
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
