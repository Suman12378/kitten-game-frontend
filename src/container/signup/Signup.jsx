import React, {useRef} from 'react';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import Config from '../../config'
import './signup.css'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'

const Signup = () => {

  const userName = useRef();
  const email  = useRef();
  const password = useRef();
  const repassword = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const submitHandler = async(e)=> {
    e.preventDefault();
     try{
      const {data:{user}} = await axios.post(`${Config.BACKEND_DOMAIN}v1/register`, {
        userName:userName.current.value,
        email:email.current.value,
        password:password.current.value,
        confirmPassword:repassword.current.value,
      })
        // console.log(user);
        dispatch({type:'SignIn', payload:user});
        navigate('/start');
        
     }
     catch(err){
      toast.error(err.response.data.msg)
        console.log(err.response.data.msg);
     }
  }


  return (
    <div className="kitten-game-signup">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form  onSubmit = {submitHandler}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" ref={userName} placeholder='User Name' required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" ref={email} placeholder='Your Email Id'required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" ref={password} placeholder='Enter Your Password' required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" id="confirmpassword" name="password" ref={repassword} placeholder='Re-Enter Your Password' required/>
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
