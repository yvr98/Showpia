import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import ToggleColorModeProvider from './utils/ToggleColorMode';

import App from './App';
import store from './app/store';
<<<<<<< Updated upstream
import './index.css'
=======
import './index.css';
>>>>>>> Stashed changes



ReactDOM.render(
      <Provider store={store}>
      <ToggleColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ToggleColorModeProvider>
      </Provider>,
  
  document.getElementById('root'),
);


