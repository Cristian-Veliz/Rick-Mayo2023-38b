import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
 
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  </Provider>
 
);



// nota: importamos {BrowserRouter} y envolvemos nuestra app en las etiquetas <BrowserRouter> y <Provider> que tiene mi store.