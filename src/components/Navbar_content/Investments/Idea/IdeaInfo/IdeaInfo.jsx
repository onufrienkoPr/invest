import React from 'react';
import spacex from "../../../../../assets/images/spacex.svg";
import s from "./IdeaInfo.module.css"
import {NavLink} from "react-router-dom";

const IdeaInfo = (props) => {
    return <>
        <div className={s.back}><NavLink to={"/investments"}> ← Все инвестиционные идеи</NavLink></div>
        <div className={s.idea_cards}>

            <div className={s.inline}>

                <div className={s.logodescname}>
                    <div className={s.ilogo}><img src={spacex}/></div>
                    <div className={s.namedesc}>
                        <div className={s.iname}>{props.idea.iname}</div>
                        <div className={s.idescription}>{props.idea.idescription}</div>
                    </div>
                </div>

                <div className={s.typerisk}>
                    <div className={s.itype}>{props.idea.itype}</div>
                    <div className={s.irisk}></div>
                </div>

            </div>
            <div className={s.allgraph}>
                <div className={s.qqq}>
                    <div className={s.first}>$450 млн</div>
                    <div className={s.second}>$1,3 млрд</div>
                    <div className={s.third}>$3,1 млрд</div>
                </div>
            </div>
            <div className={s.iline}></div>
            <div className={s.ipricestart}>
                <div className={s.iprice}>Прогноз дохода
                    <div className={s.iprices}>{props.idea.iprice}$</div>
                </div>
                <div className={s.istart}>Старт
                    <div className={s.istarts}>20 ноября</div>
                </div>
            </div>
        </div>


        <div className={s.toinvest}>Инвестировать в {props.idea.iname}</div>
        <div className={s.ibutton}>
            <button>Инвестировать от 50 $</button>
        </div>
    </>
}

export default IdeaInfo;