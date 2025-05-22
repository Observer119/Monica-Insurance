const { StrictMode } = React;
const { createRoot } = ReactDOM;
const { BrowserRouter } = ReactRouterDOM;

import App from './App.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);