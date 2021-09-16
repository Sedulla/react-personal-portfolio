import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import React from 'react';
import ReactDOM from 'react-dom';
import Typography from './styles/Typography';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById('root')
);
