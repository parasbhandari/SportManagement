import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainNav from './components/global/VisitorNav'
import LoginBoards from './pages/auth/LoginBoards'
import VisitorLayout from './layouts/VisitorLayout'

const App = () => {
  const role = 'visitor_layout'
  return (
    <main className='visitors_page'>
      {role == 'visitor_layout' && <VisitorLayout/>}
    </main>
  )
}

export default App