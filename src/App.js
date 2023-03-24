import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Broadband from './pages/broadband';
import Recharge from './pages/recharge';
import Mydetails from './pages/mydetails';
import Connectiondetails from './pages/connectiondetails';
import Applynew from './pages/applynew';
import MyBroadbandPlans from './pages/mybroadbandplans';
import Register from './pages/register';
import AdminLogin from './pages/adminlogin';
import AdminDashboard from './pages/admindashboard';
import MyMobileRechargePlans from './pages/mymobilerechargeplans';


function App() {
  return (
    <div>
   
   <Router>
      <Routes>
        <Route exact path="/" element={	<Navigate to="/login" />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/recharge" element={<Recharge />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/admin-login" element={<AdminLogin />}></Route>
        <Route exact path="/broadband" element={<Broadband />}></Route>
        <Route exact path="/mydetails" element={<Mydetails />}></Route>
        <Route exact path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route exact path="/mybroadbandplans" element={<MyBroadbandPlans />}></Route>
        <Route exact path="/mymobilerechargeplans" element={<MyMobileRechargePlans />}></Route>
        <Route exact path="/connectiondetails" element={<Connectiondetails />}></Route>
        <Route exact path="/applynew" element={<Applynew />}></Route>
      </Routes>
    </Router>
    </div>

  );
}

export default App;
