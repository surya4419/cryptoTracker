import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CoinContextProvider>
      <App />
      </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
