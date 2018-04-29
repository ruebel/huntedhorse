import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './styles/global';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import theme from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
