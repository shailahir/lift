import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// Import <SaltProvider>
import { SaltProvider } from "@salt-ds/core";

// Import theme CSS
import "@salt-ds/theme/index.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SaltProvider>
    <App />
    </SaltProvider>
  </React.StrictMode>,
)
