import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../pages/CampIndex.css";
import "bootstrap/dist/css/bootstrap.css";

import { Button } from 'bootstrap';
import useAuthContext from "../context/AuthContext";


const LoginButton = () => {
    const { user ,logout} = useAuthContext();
    // console.log(user)
  
    return user ? (
        <div className='text-end'>
        <button onClick={logout} class="mr-5 bg-dark text-light">登出</button>
        </div>
    ):(
        <div className='text-end'>
        <Link class="mr-5 btn bg-dark text-light" to="/login">登入</Link>
         <span>||</span>
        <Link class="mr-5 btn bg-dark text-light" to="/register">註冊</Link>
        </div>
    );
};

export default LoginButton;