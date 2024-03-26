import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import './leaderboard.css'
import config from '../../config'

const Leaderboard = () => {

  const {user}  = useSelector(state=>state.user);

   const [userArr, setUserArr] = useState([]);
   const [myDetails, setMyDetails] = useState([]);
   const val = 5;
  //  console.log(user);

  const fetchResult = async() => {
      try{
         const {data} =  await axios.post(`${config.BACKEND_DOMAIN}v1/leaderboard`,{
          email:user.email
         });
        setUserArr(data.userRes);
        setMyDetails(data.myDetails)
         console.log(myDetails);
      }
      catch(err){
        console.log(err);
      }
  }

  

  useEffect(()=>{
    fetchResult();

     const intervalId = setInterval(fetchResult, 30000); // Call fetchResult every one minute

    return () => clearInterval(intervalId); // Clean up by clearing the interval when the component unmounts
  },[]) 




  

  return (
    <div className="kitten-game-leaderboard">
      <div className="leaderabord-head" style={{display:'flex', justifyContent:'space-between'}}>
         <span>UserName</span>
         <span style={{display:'flex'}}>Score  <p style={{marginLeft:'25px'}}>Win/Total</p></span>
      </div>
      { 
         userArr.map((candidate)=>(
             <div className="information" key={candidate._id}>
                   <span>{candidate.username}</span> 
                   <span style={{display:'flex'}}>{candidate.score} <p style={{marginLeft:'65px'}}>{candidate.winMatch}/{candidate.totalMatch}</p></span>
             </div>
         ))
      }

      <div className="your-score" >
           <span style={{fontSize:'34px'}}>Your Score</span>
           <div className="information">
                 <span>{myDetails.username}</span>
                 <span style={{display:'flex'}}>{myDetails.score} <p style={{marginLeft:'65px'}}>{myDetails.winMatch}/{myDetails.totalMatch}</p></span> 
           </div>
      </div>
    </div>
  )
}

export default Leaderboard