
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import "./dashboard.css"
import logo from "./images/logo.png"
import Login from "./login";
import SignUp from "./SignUp";

const Dashboard = () => {
    return (

        <div className='container'>
            <div className='main-div'>
                <img src={logo} alt="logo" />
                <Router>
                    <Routes>
                        <Route path="/sign" element={SignUp}></Route>

                    </Routes>
                </Router>

            </div>
        </div>
    )
}

export default Dashboard
