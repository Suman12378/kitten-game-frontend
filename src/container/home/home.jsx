import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import { useSelector } from 'react-redux';

const Home = () => {

  const navigate = useNavigate();

   const {user}  = useSelector(state=>state.user);


  return (
    <div className="kitten-game-home"> 
         <div className="home-body">
           <p>Welcome <br /> In <span>Kitten Exploading</span> Game</p>
         </div>

         <div className="home-footer">   
               {!user ? (<div className="buttons"> 
                      <button onClick={()=>navigate('/login')}>Login</button>
                      <button onClick={()=>navigate('/signup')}>Signup</button>
               </div>):(
                  <div className="buttons">
                      <button onClick={()=>navigate('/start')}>Start The Game</button>
                  </div>
               )}
         </div>
    </div>
  )
}

export default Home