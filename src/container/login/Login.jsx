import React, {useRef} from 'react';
import './login.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async(e) => {
     e.preventDefault();

      try{
        const {data:{userDetails}} = await axios.post(`${config.BACKEND_DOMAIN}v1/login`, {
       email:emailRef.current.value,
       password:passwordRef.current.value
        })
        //  console.log(userDetails)

        const {data:{userState}} = await axios.post(`${config.BACKEND_DOMAIN}v1/fetchstate`,{
          id:userDetails._id
        })

        console.log(userState);

        dispatch({type:'update-state',payload:userState})

        dispatch({type:'LogIn', payload:{
          userDetails
        }});
        navigate('/start');
      }
      catch(err){
        console.log(err);
      }
  }


  return (
    <div className="kitten-game-login">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" ref={emailRef} placeholder='Enter Your Email ID' required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" ref={passwordRef} placeholder='Enter Your Password'required/>
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
