import { useEffect, useState } from "react";
import axios from 'axios';


function MyMobileRechargePlans() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers();
        console.log(localStorage.getItem("token"));
    }, []);

    const tkn="Bearer "+localStorage.getItem("token");
    const head = {
        'Content-Type': 'application/json',
        'Authorization': tkn
      }

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:9090/api/v1/user/recharge-plan/${localStorage.getItem("token")}`,{headers:head});
        setUsers(result.data);
        console.log(result.data);
        
    };

    if(localStorage.getItem("token")!=null){
    return (
        <div className='container'>
        <div className='py-4'>
        <h2 className='display-6 pb-4'>My Plans</h2>
            <table className="table table-striped shadow">

                <thead className='text-light bg-dark'>
                    <tr>
                        <th scope="col">S.no.</th>
                        <th scope="col">Plan</th>
                        <th scope="col">Details</th>
                        <th scope="col">Price</th>
                        <th scope="col">Validity</th>
                        <th scope="col">Recharge Date</th>
                        <th scope="col">Plan Code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.userRechargePlanName}</td>
                                <td>{user.userRechargePlanDetails}</td>    
                                <td>{user.userRechargePrice}</td>
                                <td>{user.userRechargePlanValidity}</td>
                                <td>{user.userRechargeDate.toString().split("T")[0]} {user.userRechargeDate.toString().split("T")[1].split(".")[0]}</td>
                                <td>{user.rechargeKey}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
  
        );
    }}
    
export default MyMobileRechargePlans;