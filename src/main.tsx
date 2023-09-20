import React from 'react';
import ReactDOM from 'react-dom/client';
import { Providers } from './providers.tsx';
import App from './App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);
