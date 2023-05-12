import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import App from './App';
import 'react-toastify/dist/ReactToastify.css'; // import CSS
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
