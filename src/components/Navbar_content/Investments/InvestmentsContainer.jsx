import React from 'react';
import ContentContainer from "../../LinksMainInvests/LinksMainInvests";
import s from './Investments.module.css'
import spacex from "../../../assets/images/spacex.svg"

const InvestmentsContainer = () => {
    let state = {
        text: 'Лучшие инвестиционные идеи'
    }
    return <>
        <ContentContainer state={state}/>
        <div className={s.idea_list}>
            <div className={s.idea_list_cards}>
                <div className={s.idea_cards}>
                    <div className={s.irisk}></div>
                    <div className={s.itype}>IPO</div>
                    <div className={s.ilogo}><img src={spacex}/></div>
                    <div className={s.iname}>SpaceX</div>
                    <div className={s.idescription}>Полёты в космос и спутниковый интернет</div>
                    <div className={s.iline}></div>
                    <div className={s.ipricestart}>
                        <div className={s.iprice}>Прогноз дохода<div className={s.iprices}>90 % годовых</div></div>
                        <div className={s.istart}>Старт<div className={s.istarts}>21 окт 19:00</div></div>
                    </div>
                    <div className={s.ibutton}><button>Инвестировать от 50 $</button></div>
                </div>
            </div>
        </div>
    </>
}

export default InvestmentsContainer;