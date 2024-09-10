import Nav from './Components/Nav'
import './index.css'
import "./App.css"
import Home from './Pages/Home/Home'
import Events from "./Pages/EventMan/Events"
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard'
import Matches from './Pages/Matches/Matches'
import Sponsers from './Pages/Sponsors/Sponsers'
import Teams from './Pages/Teams/Teams'
import React from 'react'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Events" element={<Events/>}/>
      <Route path="/LeaderBoard" element={<LeaderBoard/>}/>
      <Route path="/Matches" element={<Matches/>}/>
      <Route path="/Sponsers" element={<Sponsers/>}/>
      <Route path="/Teams" element={<Teams/>}/>

    </Routes>
    </>
  )
}

export default App