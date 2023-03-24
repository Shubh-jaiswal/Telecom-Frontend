import { useEffect, useState } from "react";
import axios from 'axios';


function Mydetails() {

    const [user, setUsers] = useState([])
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
        const result = await axios.get(`http://localhost:9090/api/v1/user/${localStorage.getItem("token")}`,{headers:head});
        setUsers(result.data);
        console.log(result.data);
        
    };

    if(localStorage.getItem("token")!=null){
    return (
        <div className='container'>
            <div className='py-4'>
            <h2 className='display-6 pb-4'>My Profile</h2>
                <table className="table table-striped shadow">

                    <thead className='text-light bg-dark'>
                        <tr>
                            {/* <th scope="col">S.no.</th> */}
                            <th scope="col">Email</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Address</th>
                            <th scope="col">Aadhar Number</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                                <tr>
                                    {/* <th scope="row" key={index}>{index + 1}</th> */}
                                    <td>{user.userEmail}</td>
                                    <td>{user.userName}</td>    
                                    <td>{user.userPhoneNumber}</td>
                                    <td>{user.userAddress}</td>
                                    <td>{user.userAadharNumber}</td>
                                    <td>{user.userGender}</td>
                                </tr>
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>
  
        );
    }
}
    
export default Mydetails;