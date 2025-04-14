import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import a from './a.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div></div>
  </StrictMode>,
)
