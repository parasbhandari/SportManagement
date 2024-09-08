import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './Components/Nav'
import './index.css'
import "./App.css"
import Home from './Pages/Home/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Home/>
  </StrictMode>,
)
