import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './Components/Nav'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
  </StrictMode>,
)
