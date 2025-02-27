import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/organisms/NavBar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
