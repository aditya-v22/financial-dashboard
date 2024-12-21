import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root')!, {
  // Catch errors in any components below and re-render with error message
  onCaughtError(error, errorInfo) {
    console.error(error, errorInfo);
  },
  onUncaughtError(error, errorInfo) {
    console.error(error, errorInfo);
  },
});

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
