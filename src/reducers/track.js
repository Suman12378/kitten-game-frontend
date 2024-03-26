// track.js

import { createReducer } from '@reduxjs/toolkit';

const trackReducer = createReducer(
    {
        remainingCards:5,
        drawnCards:[],
        bombActive:false,
        difuseCards:0,
       
    },
    (builder) => {
         builder
           .addCase('update-remainig', (state, action) =>{
              state.remainingCards = action.payload;
           })
           .addCase('decrease-remaining', (state, action)=>{
              state.remainingCards -= 1;
              
           })
           .addCase('drawn-card-state', (state, action)=>{
            
              state.drawnCards = [...state.drawnCards, action.payload];
               
                
           })
           .addCase('is-bomb', (state, action)=>{
               if(state.difuseCards===0){
                  state.bombActive = true;
               }
               else{
                state.difuseCards -= 1;
               }
           })
           .addCase('is-difuse', (state, action)=>{
               state.difuseCards += 1;
           })
           .addCase('reset-all-val', (state, action)=>{
             state.remainingCards = 5;
             state.bombActive = false;
             state.difuseCards = 0;
             state.drawnCards.splice(0, state.drawnCards.length);
              
           })
           .addCase('update-state', (state, action)=>{
            //    console.log(action.payload.remainingCards);
                state.remainingCards = action.payload.remainingCards;
                state.bombActive = action.payload.bombActive;
                state.difuseCards = action.payload.difuseCards;
                state.drawnCards = action.payload.drawnCards;
           })
    }
)

export default trackReducer 