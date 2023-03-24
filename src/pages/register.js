import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Register() {

    let navigate=useNavigate();


    const [user,setUser]=useState({
        userName:"",
        userEmail:"",
        userPassword:"",
        userPhoneNumber:"",
        userAddress:"",
        userAadharNumber:"",
        userGender:""
    });

    const {userName,userEmail,userPassword,userPhoneNumber,userAddress,userAadharNumber,userGender}=user;

    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});

    };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:9090/api/v1/user/auth/add", user,{responseType:"text"});
        navigate("/login");
        console.log(user);
    };

    


    return (
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
                <h2 className='text center m-3'>Register </h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>Name</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Enter your name'
                       name='userName' 
                       value={userName} 
                       onChange={(e)=>onInputChange(e)}></input>
                       

                </div>
                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>Email</label>
                    <input 
                       type={"email"}
                       className='form-control'
                       placeholder='Enter your Username'
                       name='userEmail' 
                       value={userEmail}
                       onChange={(e)=>onInputChange(e)}></input>

                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input 
                       type={"password"}
                       className='form-control'
                       placeholder='Enter password'
                       name='userPassword' 
                       value={userPassword}
                       onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='text' className='form-label'>Phone Number</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Enter Phone Number'
                       name='userPhoneNumber' 
                       value={userPhoneNumber}
                       onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='text' className='form-label'>Address</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Enter address'
                       name='userAddress' 
                       value={userAddress}
                       onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='text' className='form-label'>Aadhar Number</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Aadhar number'
                       name='userAadharNumber' 
                       value={userAadharNumber}
                       onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='text' className='form-label'>Gender</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Gender'
                       name='userGender' 
                       value={userGender}
                       onChange={(e)=>onInputChange(e)}></input>
                </div>
 
                <p>Already a user? <a href='/login'> Login Here</a></p>


                <Button variant="btn btn-outline-primary" type="submit">Submit</Button>
                <Link  className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>


                </form>
            </div>
        </div>
    </div>
  
);

}
    
    
export default Register;