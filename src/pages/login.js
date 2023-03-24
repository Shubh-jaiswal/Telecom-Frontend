import './login.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

  let Navigate=useNavigate();

    const [user,setUser]=useState({
        userEmail:"",
        userPassword:""
    });

    const {userEmail,userPassword}=user;
    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});

    };


  const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:9090/api/v1/user/auth/authenticate", user)
    .then((res)=>{
        if(res!=null){
        localStorage.setItem("token",res.data);
    }
    });  
    Navigate("/home");
    
};
    return (
       
      <div className='container'>
      <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded py-4 mt-4 shadow  '>
              <h2 className='text center m-3 '>Login</h2>
              <form onSubmit={(e)=>onSubmit(e)}>
              <div className='mb-3'>
                  <label htmlFor='Username' className='form-label m-2  '>Email</label>
                  <input 
                     
                     type={"email"}
                     className='form-control'
                     placeholder='email'
                     name='userEmail' 
                     value={userEmail} 
                     onChange={(e)=>onInputChange(e)} required></input>
                     

              </div>
              <div className='mb-3'>
                  <label htmlFor='Password' className='form-label m-2'>Password</label>
                  <input 
                     type={"password"}
                     className='form-control'
                     placeholder='Password'
                     name='userPassword' 
                     value={userPassword}
                     onChange={(e)=>onInputChange(e)} required></input>

              </div>
              <p>Not a user? <a href='/register'> Register Here</a></p>
              <button type='Submit' className='btn btn-outline-primary' >Submit</button>

              </form>
          </div>
      </div>
  </div>
   
    );
}

export default Login;


// type={"email"}
// className='form-control'
// placeholder='email'
// name='userEmail' 
// value={userEmail} 
// onChange={(e)=>onInputChange(e)} required></input>

// </Form.Group>
// <Form.Group className="mb-3" controlId="formBasicPassword">
// <Form.Label>Password</Form.Label>
// <input 
// type={"password"}
// className='form-control'
// placeholder='password'
// name='userPassword' 
// value={userPassword}