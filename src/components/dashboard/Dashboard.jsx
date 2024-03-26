import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardImage from '../../assets/card-image-1.jpg';
import {toast} from 'react-hot-toast'
import './dashboard.css'
import axios from 'axios';
import config from '../../config';

const Dashboard = () => {


  const {  remainingCards, drawnCards } = useSelector(state => state.track);
  const dispatch = useDispatch();
  // const remainingCard = 5; 

  const cardArray = Array.from({ length: remainingCards }, (_, index) => index);

   const clickHandler = async()=>{


       try{
         const {data} = await axios.get(`${config.BACKEND_DOMAIN}v1/draw-card`)
          
           toast.success(data.msg);

           dispatch({type:'drawn-card-state', payload:{
            statement: data.msg
           }});
           dispatch({type:'decrease-remaining'});


           if(data.msg==='Exploadin Kitten Card'){
                dispatch({type:'is-bomb'});
           }

           if(data.msg==='Defusing Card'){
               dispatch({type:'is-difuse'});
           }

           if(data.msg==='Shuffle Card'){
                toast.success('Game Start Again Due to shuffle Card')
               dispatch({type:'reset-all-val'});
           }
          
       }
       catch(err){
         console.log(err);
       }




        
        

   }

  

  return (
    <div className="kitten-game-dashboard">

    <div className="kitten-game-dashboard-head">
        <span>Rules of game</span>
        <ul>There are four type of cards 1.Cat card, 2.Defuse card, 3.Shuffle card, 4.Exploading kitten card</ul>
       <li>If the card drawn from the deck is a cat card, then the card is removed from the deck.</li>
       <li>If the card is exploding kitten (bomb) then the player loses the game.</li>
       <li>If the card is a defusing card, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.</li>
       <li>If the card is a shuffle card, then the game is restarted and the deck is filled with 5 cards again.</li>
    </div>
      
    <div className="kitten-game-dashboard-mid">
       {cardArray.map(index => (
          <div className="dashboard-card" key={index} onClick={clickHandler}>
            <img src={CardImage} alt="CardImage" />
          </div>
       ))}
     </div>


     {
      drawnCards.length>0 && (
        <div className="kitten-game-dashboard-footer">
        <div className="dashboard-footer-content">
            Your drawn Cards listed below
        </div>
        {
           drawnCards.length>0 && (
              drawnCards.map((id, index)=>(
                 <div className="card-content" key={index}>
                    {index+1}. {id.statement}.
                 </div>
              ))
           )
        }
     </div>
      )
     }
  </div> 
  ) 
}

export default Dashboard