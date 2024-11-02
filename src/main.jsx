import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import ResetStyle from './Style/ResetStyle.jsx';
import { GlobalStyle } from './Style/GlobalStyle.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </StrictMode>,
)

