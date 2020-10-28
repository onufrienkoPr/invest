import React from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Authentication/Login";
import logosite from "../../assets/images/logo.png"
import './Header.css'
import Register from "./Authentication/Register";

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
            <Register/>
        </div>
}

export default Header;


//     render() {
//         return <div className={s.loginBlock}>
//
//             <div className={s.inline}>
//                 <div className={s.price}><h4>1 300 $</h4></div>
//                 <div>
//                     <button className={s.addMoney}>+</button>
//                 </div>
//                 <div><img className={s.logo}
//                           src='http://www.gravatar.com/avatar/e53eca1aaf15ae6934e70f6a999bf762?d=retro&r=g&s=50%27/'/>
//                 </div>
//                 <div className={s.inline}>
//                     <button className={s.login} onClick={this.toLogout}>Выход</button>
//                 </div>
//             </div>
//
//             <div className={s.inline}>
//                 <button className={s.login} onClick={this.toLogin}>Вход</button>
//             </div>
//
//         </div>
//     }
// }