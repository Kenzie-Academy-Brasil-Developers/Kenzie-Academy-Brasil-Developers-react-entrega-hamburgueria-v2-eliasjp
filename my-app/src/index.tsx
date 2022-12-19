import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles';
import { LoginProvider } from './context/LoginContext.tsx/LoginContext';
import { ProductsProvider } from './context/ProductsContext/ProductsContext';
import { ModalProvider } from './context/ModalContext.tsx/ModalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <LoginProvider>
          <ModalProvider>
            <ProductsProvider>
              <GlobalStyles />
              <App />
            </ProductsProvider>
          </ModalProvider>
        </LoginProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
