import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainNav from '../components/global/VisitorNav'
import LoginBoards from '../pages/auth/LoginBoards'
import Homepage from '../pages/Homepage'
import TeamBoard from '../components/svgs/TeamBoard'

const VisitorLayout = () => {
  const role = 'visitor_layout'
  return (
      <BrowserRouter>
        <MainNav/>
          <Routes>
              <Route path='/join-now' element={<LoginBoards/>}/>
              <Route path='' element={<Homepage/>} />
              <Route path='jersey' element={<TeamBoard/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default VisitorLayout