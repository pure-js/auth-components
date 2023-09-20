import React from 'react';
import ReactDOM from 'react-dom/client';
import { Providers } from './providers.tsx';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
);
