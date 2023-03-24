import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';




function AdminDashboard() {

    let Navigate=useNavigate();

    const [user,setUser]=useState({
        broadbandPlanName:"",
        broadbandPlanDetails:"",
        broadbandPrice:"",
        broadbandPlanValidity:"",
    });

    const {broadbandPlanName,broadbandPlanDetails,broadbandPrice,broadbandPlanValidity}=user;

    const tkn="Bearer "+localStorage.getItem("token");
    const head = {
        'Content-Type': 'application/json',
        'Authorization': tkn
      }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:9091/api/v1/broadband/add", user);
        console.log(user);
    };
    
    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});

    };

    

    const onLogout = () => {
        localStorage.removeItem("token");
        Navigate("/admin-login");
      };

    if(localStorage.getItem("token")!=null){
    return (
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
                <h2 className='text center m-3'>Add Broadband Plans</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>Broadband Plan Name</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Broadband Plan Name'
                       name='broadbandPlanName' 
                       value={broadbandPlanName} 
                       onChange={(e)=>onInputChange(e)} />
                       

                </div>
                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>Broadband Plan Details</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Broadband Plan Details'
                       name='broadbandPlanDetails' 
                       value={broadbandPlanDetails}
                       onChange={(e)=>onInputChange(e)} />

                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Broadband Price</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Broadband Price'
                       name='broadbandPrice' 
                       value={broadbandPrice}
                       onChange={(e)=>onInputChange(e)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='text' className='form-label'>Broadband Plan Validity</label>
                    <input 
                       type={"text"}
                       className='form-control'
                       placeholder='Broadband Plan Validity'
                       name='broadbandPlanValidity' 
                       value={broadbandPlanValidity}
                       onChange={(e)=>onInputChange(e)} />
                </div>
        
                <Button variant="primary" type="submit">Submit</Button>
                <Link  className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>


                </form>
                <Link className="text-dark text-decoration-none" to='/login' onClick={() => onLogout()}>Log out</Link>
            </div>
        </div>
    </div>
    );
}
}

export default AdminDashboard;