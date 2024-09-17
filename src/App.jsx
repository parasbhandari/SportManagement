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

    </Routes>
    </>
  )
}

export default App