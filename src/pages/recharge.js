import { useEffect, useState } from "react";
import axios from 'axios';


function Recharge() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers();
        console.log(localStorage.getItem("token"));
    }, []);

    const token = localStorage.getItem("token");

    const tkn="Bearer "+localStorage.getItem("token");

    const head = {
        'Content-Type': 'application/json',
        'Authorization': tkn,
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Origin": "*"
      }

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:9090/api/v1/recharge-plans/all",{headers:head});
        setUsers(result.data);
        console.log(result.data);
        
    };

    const selectplan =async(id)=>{
   

        fetch(`http://localhost:9090/api/v1/user/recharge-plan/add/${token}/${id}`,{ method: 'POST',headers: {
                    'content-Type':'application/json',
                    'Authorization': `Bearer ${token}`
                },})
            .then((response) => response.text())
            .then((data) => {
             console.log(data);
            }
            )
            .catch((error) => {
              console.log(error);
              
              
            });
        };
    
    
        if(localStorage.getItem("token")!=null){
    return (
        <div className='container'>
        <div className='py-4'>
        <h2 className='display-6 pb-4'>Mobile Recharge Plans</h2>
            <table className="table table-striped shadow">

                <thead className='text-light bg-dark'>
                    <tr>
                        <th scope="col">S.no.</th>
                        <th scope="col">Plan</th>
                        <th scope="col">Details</th>
                        <th scope="col">Price</th>
                        <th scope="col">Validity</th>
                        <th scope="col">Key</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.rechargePlanName}</td>
                                <td>{user.rechargePlanDetails}</td>    
                                <td>{user.rechargePrice}</td>
                                <td>{user.rechargePlanValidity}</td>
                                <td>{user.rechargeKey}</td>
                                <td>   
                                    <button type="button" className="btn btn-dark" onClick={()=>selectplan(user.rechargeKey)}>Recharge</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>


   
    );
}}

export default Recharge;