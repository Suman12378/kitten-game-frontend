import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import config from '../../config';


const Navbar = () => { 

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const {user} = useSelector(state=>state.user);
   const {remainingCards, bombActive, difuseCards, drawnCards} = useSelector(state=>state.track);

   const logOutHandler = async() => {


     const {data} = await axios.post(`${config.BACKEND_DOMAIN}v1/updatestate`,{
           remainingCards,
           bombActive,
           difuseCards,
           drawnCards,
           id:user._id
     });

     console.log(data);


      dispatch({type:'LogOut'});
      dispatch({type:'reset-all-val'});
      navigate('/');
   }
    

  return (
    <div className="kitten-game-navbar">
          <div className="logo">
              Logo Here
          </div>

          <div className="nav-items">
             <button onClick={()=>navigate('/start')}>Start</button>
             <button onClick={()=>navigate('/leaderboard')}> Leaderboard</button>
             <button onClick={()=>navigate('/profile')}>Profile</button>
             <button onClick={logOutHandler}>Logout</button>
          </div>
    </div>
  )
}

export default Navbar