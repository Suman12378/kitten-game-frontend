import React, { useEffect } from "react";
import './winloss.css';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import config from "../../config";

const LossCard = ( ) => {

    const dispatch = useDispatch();
    const {user} = useSelector(state=>state.user);

  const clickHandler =() =>{
      dispatch({type:'reset-all-val'});
  }

  const updateScore = async() => {
    try{
         await axios.post(`${config.BACKEND_DOMAIN}v1/updatescore`,
         {
            score:0,
            winMatch:0,
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
        <div className="loss-card">
            <div className="loss-card-body">
            <p>Better Luck! Try Next Game</p>
            <button onClick={clickHandler}>Start the Game Again</button>
            </div>
        </div>
    );
}

export default LossCard;
