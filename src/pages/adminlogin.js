import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './login.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function AdminLogin() {

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
    await axios.post("http://localhost:9091/api/v1/admin/auth/authenticate", user)
    .then((res)=>{
        if(res!=null){
        localStorage.setItem("token",res.data);
    }
    });  
    Navigate("/admin-dashboard");
    
};


    return (
    <>
        <Container className='login-wrapper py-5 d-flex justify-content-center align-items-center'>
        <Card className='p-4' style={{ width: '25rem' }}>
        <h1 className='pb-4 fw-bold'>Login</h1>
        <Form onSubmit={(e)=>onSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <input 
                       type={"email"}
                       className='form-control'
                       placeholder='email'
                       name='userEmail' 
                       value={userEmail} 
                       onChange={(e)=>onInputChange(e)} required></input>
                       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <input 
                       type={"password"}
                       className='form-control'
                       placeholder='password'
                       name='userPassword' 
                       value={userPassword}
                       onChange={(e)=>onInputChange(e)} required></input>
      </Form.Group>
      <p>Not a user? <a href='/register'> Register Here</a></p>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </Card>
    </Container>
    
    </>
   
    );
}

export default AdminLogin;