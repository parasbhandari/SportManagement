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
import OrganizerForgotPassword from './Visitor/Pages/Join/Organizer/OrganizerForgotPassword'
import OrganizerOTPValidation from './Visitor/Pages/Join/Organizer/OrganizerOTPValidation'
import TeamForgotPassword from './Visitor/Pages/Join/Team/TeamForgotPassword'
import TeamOTPValidation from './Visitor/Pages/Join/Team/TeamOTPValidation'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import OrganizerResetPassword from './Visitor/Pages/Join/Organizer/OrganizerResetPassword'
import TeamResetPassword from './Visitor/Pages/Join/Team/TeamResetPassword'
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
      <Route path="/Organizer/Login" element={<OrganizerLogin/>}/>
      <Route path="/Organizer/ForgotPassword" element={<OrganizerForgotPassword/>}/>
      <Route path="/Organizer/OTPValidation" element={<OrganizerOTPValidation/>}/>
      <Route path="/Organizer/Register" element={<OrganizerRegister/>}/>
      <Route path="/Organizer/ResetPassword" element={<OrganizerResetPassword/>}/>
      <Route path="/Team/Login" element={<TeamLogin/>}/>
      <Route path="/Team/Register" element={<TeamRegister/>}/>
      <Route path="/Team/ForgotPassword" element={<TeamForgotPassword/>}/>
      <Route path="/Team/OTPValidation" element={<TeamOTPValidation/>}/>
      <Route path="/Team/ResetPassword" element={<TeamResetPassword/>}/>
      </Routes>
    </>
  )
}

export default App