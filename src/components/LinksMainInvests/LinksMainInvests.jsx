import React from 'react';
import {NavLink} from "react-router-dom";
import './LinksMainInvests.css'

const LinksMainInvests = (props) => {
    return <div>
        <h1 className="page-main-title__title">{props.state}</h1>
        <div className="table">
            <div className="table_items">
                <NavLink className="item" to={'/investments'} exact activeClassName="change">Лучшие</NavLink>
                <NavLink className="item" to={'/investments/ipo'} activeClassName="change">IPO</NavLink>
                <NavLink className="item" to={'/investments/pre-ipo'} activeClassName="change">Pre-IPO</NavLink>
                <NavLink className="item" to={'/investments/otc'} activeClassName="change">OTC</NavLink>
                <NavLink className="item" to={'/investments/stocks'} activeClassName="change">Акции и ETF</NavLink>
            </div>
        </div>
    </div>
}

export default LinksMainInvests;