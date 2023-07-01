import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FilmsContextProvider } from './context/FilmsContext';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <FilmsContextProvider>
    <App />
  </FilmsContextProvider>
);
