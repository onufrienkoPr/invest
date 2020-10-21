import React from 'react';
import {NavLink} from "react-router-dom";
import Login from "../Authentication/Login";
import './Header.css'

const Header = () => {
    return <div className="header">
        <div className="main-logo">
            <div className="logo"><img src="https://illustrators.ru/uploads/attached_photo/image/8628/lord-king.png"/>
            </div>
            <div><h1>Lord Invest</h1></div>
        </div>
        <div className="header_main-menu">
            <ul className="main-menu">
                <li className="main-menu_item"><NavLink to={'/investments'}>Инвестиционные идеи</NavLink></li>
                <li className="main-menu_item"><NavLink to={'/open-investments'}>Мой портфель</NavLink></li>
            </ul>
        </div>
        <Login/>
    </div>
}

export default Header;