import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import NavBar from "./NavBar";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
/*

        <div className='container'>
            <div className='main-div'>
                <img src={logo} alt="logo" />

            </div>
        </div>
*/
const Dashboard = () => {
    const { user, login, logout } = useContext(AuthContext);
    return (<>
        <NavBar />
        <div>
            {/*   <p>Current user: {user ? user.username : 'None'}</p> */}
        </div>
    </>
    )
}
export default Dashboard
