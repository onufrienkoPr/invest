import React from 'react';
import {NavLink} from "react-router-dom";
import './ContentContainer.css'

const ContentContainer = (props) => {
    return <div>
        <h1 className="page-main-title__title">{props.state.text}</h1>
        <div className="table">
            <div className="table_items">
                <NavLink to={'/investments'} >Лучшее</NavLink>
                <NavLink to={'/investments/ipo'}>IPO</NavLink>
                <NavLink to={'/investments/pre-ipo'}>Pre-IPO</NavLink>
                <NavLink to={'/investments/otc'}>OTC</NavLink>
                <NavLink to={'/investments/stocks'}>Акции и ETF</NavLink>
            </div>
        </div>
    </div>
}

export default ContentContainer;