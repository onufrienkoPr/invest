import React from "react";
import s from './Content_cards.module.css'
import spacex from "../../../../assets/images/spacex.svg";
import {NavLink} from "react-router-dom";

const ContentCards = (props) => {
    return <NavLink to={'/investments/idea/' + props.id}>
       <div className={s.idea_cards}>
                <div className={s.irisk}></div>
                <div className={s.itype}>{props.itype}</div>
                <div className={s.ilogo}><img src={spacex}/></div>
                <div className={s.iname}>{props.iname}</div>
                <div className={s.idescription}>{props.idescription}</div>
                <div className={s.iline}></div>
                <div className={s.ipricestart}>
                    <div className={s.iprice}>Прогноз дохода<div className={s.iprices}>{props.iprice}$</div></div>
                    <div className={s.istart}>Старт<div className={s.istarts}>20 ноября</div></div>
                </div>
                <div className={s.ibutton}><button>Инвестировать от 50 $</button></div>
            </div></NavLink>
}

export default ContentCards;