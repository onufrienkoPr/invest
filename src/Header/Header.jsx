import React from 'react';
import {NavLink} from "react-router-dom";
import Login from "../Authentication/Login";
import logosite from "../assets/images/logo.png"
import s from './Header.css'

const Header = () => {
    return <div className="header">
        <div className="main-logo">
            <div className="logo"><img src={logosite}/>
            </div>
            <div className="namesite"><p>RAZNESEM</p><p>STADIK</p></div>
        </div>
        <div className="header_main-menu">
            <ul className="main-menu">
                <div className="link-hover-solid">
                <li className="main-menu_item"><NavLink to={'/investments'}>Инвестиционные идеи</NavLink></li>
                <li className="main-menu_item"><NavLink to={'/open-investments'}>Мой портфель</NavLink></li>
                </div>
            </ul>
        </div>
        <Login/>
    </div>
}

export default Header;