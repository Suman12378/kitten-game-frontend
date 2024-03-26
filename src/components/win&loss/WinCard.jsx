import React, { useEffect } from "react"
import './winloss.css'
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import config from "../../config";

export const WinCard = () => {
  
    const dispatch = useDispatch();

    const {user} = useSelector(state=>state.user);

  const clickHandler =() =>{
      dispatch({type:'reset-all-val'});
  }

    const updateScore = async() => {
        try{
             await axios.post(`${config.BACKEND_DOMAIN}v1/updatescore`, 
               {
                score:5,
                winMatch:1,
                email:user.email
               }
             )
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        updateScore();
  })


    return (
        <div className="win-card">
            <div className="win-card-body">
            <p>Congratulations! You Won The Game</p>
            <p>
               Score:5
            </p>
            <button onClick={clickHandler}>Start the Game</button>
            </div>
        </div>
    );
}

export default WinCard