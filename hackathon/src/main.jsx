import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './page1/welcome';
import User_entry from './Userentry/Userentry';
import {
  BrowserRouter, Routes,Route,} from "react-router-dom";
import Eventlist from './components/Eventslist';
import Profile from './components/profile';
import App from './App';
import ShiftsMangement from './components/ShiftsMangement';
import NewComplaints from './components/NewComplaints';
import Login from './components/login';
import L1officerStartPage from './L1officerStartPage';
import ShiftManagement from './components/ShiftManagement';
import HeaderMain from './components/Header';
import Footer from './components/footer';
import Loginuser from './components/loginUser';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderMain />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/l1carousal' element={<L1officerStartPage />} />
        <Route path='/complaint' element={<User_entry />} />
        <Route path='/eventlist' element={<Eventlist />} />
        <Route path='/shiftmanagement' element={<ShiftManagement />} />
        <Route path='/newcomplaints' element={<NewComplaints />} />
        <Route path='/login' element={<Login />} />
        <Route path='/loginUser' element={<Loginuser />} />

        <Route path='/solvedcases' element={<NewComplaints type="Solved" />} />
        <Route path='/allotedcases' element={<NewComplaints type="Alloted" />} />
        <Route path='/newcases' element={<NewComplaints type="New" />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
)


