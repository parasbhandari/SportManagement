import Nav from './Visitor/Components/Nav'
import './index.css'
import "./App.css"
import Home from './Visitor/Pages/Home/Home'
import Events from "./Visitor/Pages/EventMan/Events"
import LeaderBoard from './Visitor/Pages/LeaderBoard/LeaderBoard'
import Matches from './Visitor/Pages/Matches/Matches'
import Sponsers from './Visitor/Pages/Sponsors/Sponsers'
import Teams from './Visitor/Pages/Teams/Teams'
import _Events from './Visitor/Pages/LeaderBoard/EventDetails/_Events'
import Join from "./Visitor/Pages/Join/Join"
import OrganizerLogin from './Visitor/Pages/Join/Organizer/OrganizerLogin'
import OrganizerRegister from './Visitor/Pages/Join/Organizer/OrganizerRegister'
import TeamLogin from './Visitor/Pages/Join/Team/TeamLogin'
import TeamRegister from "./Visitor/Pages/Join/Team/TeamRegister"
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
        
      <Route path="/LeaderBoard/EventDetails" element={<_Events/>}/>
      <Route path="/Matches" element={<Matches/>}/>
      <Route path="/Sponsers" element={<Sponsers/>}/>
      <Route path="/Teams" element={<Teams/>}/>
      <Route path="/Join" element={<Join/>}/>
      <Route path="/Join/Organizer/Login" element={<OrganizerLogin/>}/>
      <Route path="/Join/Organizer/Register" element={<OrganizerRegister/>}/>
      <Route path="/Join/Team/Login" element={<TeamLogin/>}/>
      <Route path="/Join/Team/Register" element={<TeamRegister/>}/>
      

    </Routes>
    </>
  )
}

export default App