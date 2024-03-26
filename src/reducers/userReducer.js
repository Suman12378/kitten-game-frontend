//userReducer.js

import { createReducer } from '@reduxjs/toolkit'

const userReducer = createReducer(
    {
        user:null,
    },
    (builder)=>(
        builder
        .addCase('SignIn',(state, action)=>{
            // console.log(action.payload);
             state.user = action.payload;
        })
        .addCase('LogIn', (state, action)=>{
            console.log(action.payload)
            state.user = action.payload;
        })
        .addCase('LogOut',(state,action)=>{
            state.user = null;
        })
    )
)

export default userReducer;