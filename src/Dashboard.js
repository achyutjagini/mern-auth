import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import logo from "./images/logo.png"
import Login from "./login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import "./login.css"

/*

        <div className='container'>
            <div className='main-div'>
                <img src={logo} alt="logo" />

            </div>
        </div>
*/
const Dashboard = () => {


    return (<>
        <NavBar />

    </>
    )
}

export default Dashboard
