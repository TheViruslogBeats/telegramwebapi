import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import telegramWebApi from './telegramWebApi';


const root = ReactDOM.createRoot(document.getElementById('root'));

telegramWebApi.startWebApi()

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);