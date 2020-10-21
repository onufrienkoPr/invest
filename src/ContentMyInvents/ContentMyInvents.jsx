import React from 'react';
import {NavLink} from "react-router-dom";
import './ContentMyInventsContainer.css'

const ContentMyInventsContainer = (props) => {
    return <div>
        <h1 className="page-main-title__title">{props.state.text}</h1>
        <div className="table">
            <div className="table_items">
                <NavLink to={'/investments/open-investments'}>Открытые инвестиции</NavLink>
                <NavLink to={'/investments/open-investment/archive'}>Архив</NavLink>
            </div>
        </div>
    </div>
}


export default ContentMyInventsContainer;