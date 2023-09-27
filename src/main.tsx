import React from 'react';
import ReactDOM from 'react-dom/client';
if (import.meta.env.DEV) {
  const mod = await import('@axe-core/react'); //@ts-ignore
  mod.axe(React, ReactDOM, 1000);
}

import { Providers } from './providers.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
);
