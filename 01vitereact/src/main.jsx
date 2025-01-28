import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> is only for developers and does nothing in UI.
  <StrictMode>
    <App />
  </StrictMode>,
)
