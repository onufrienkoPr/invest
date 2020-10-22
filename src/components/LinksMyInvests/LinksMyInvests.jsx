import React from 'react';
import {NavLink} from "react-router-dom";
import './LinksMyInvests.css'

const LinksMyInvests = (props) => {
    return <div>
        <h1 className="page-main-title__title">{props.state.text}</h1>
        <div className="mytable">
            <div className="mytable_items">
                <NavLink className="myitem" to={'/investments/open-investments'} exact activeClassName="mychange">Открытые инвестиции</NavLink>
                <NavLink className="myitem" to={'/investments/open-investment/archive'} activeClassName="mychange">Архив</NavLink>
            </div>
        </div>
    </div>
}


export default LinksMyInvests;