import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Login from './container/login/Login'
import Signup from './container/signup/Signup'
import Home from './container/home/home.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import './app.css'
import Leaderboard from './components/leaderboard/leaderboard.jsx'
import Profile from './components/profile/Profile.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import { useSelector } from 'react-redux'
import WinCard from './components/win&loss/WinCard.jsx'
import LossCard from './components/win&loss/LossCard.jsx'



const App = () => { 

   const {remainingCards, bombActive} = useSelector(state=>state.track);
   const {user} = useSelector(state=>state.user);

     
   

  return (
     <div className='kitten-game-app'>

          {remainingCards===0 && <WinCard/>}
          {bombActive && <LossCard/>}
          <Router>
              {user &&  <Navbar/>}
               <Routes>
                  <Route path='/' element = {<Home/>}/>
                   {!user && <Route path='/login' element = {<Login/>}/>}
                   {!user && <Route path='/signup' element = {<Signup/>}/>}

                   {user && <Route path='/leaderboard' element = {<Leaderboard/>}/>}
                   {user && <Route path='/profile' element = {<Profile/>}/>}
                   {user && <Route path='/start' element = {<Dashboard/>}/>}
                  

                  
               </Routes> 
               <Toaster/>
          </Router>
     </div>
  )
}

export default App