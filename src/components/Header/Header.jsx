import React from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Authentication/Login";
import logosite from "../../assets/images/logo.png"
import './Header.css'

const Header = () => {
    return <div className="header" >
            <NavLink to={'/'}>
                <div className="main-logo">
                    <div className="logo"><img src={logosite}/></div>
                    <div className="name-site"><p>RAZNESEM</p><p>STADIK</p></div>
                </div>
            </NavLink>
            <div className="header_main-menu">
                <ul className="main-menu">
                    <div className="link-hover-solid">
                        <li className="main-menu_item"><NavLink to={'/investments'} exact activeClassName="current">Инвестиционные
                            идеи</NavLink></li>
                        <li className="main-menu_item"><NavLink to={'/investments/open-investments'}
                                                                activeClassName="current">Мой портфель</NavLink></li>
                    </div>
                </ul>
            </div>
            <Login/>
        </div>
}

export default Header;