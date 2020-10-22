import React from 'react';
import LinksMainInvests from "../../LinksMainInvests/LinksMainInvests";
import ContentCards from "./Content_cards/Content_cards";
import s from "./Investments.module.css";

const InvestmentsContainer = () => {
    let state = {
        text: 'Лучшие инвестиционные идеи',
        cards: [{id:1 ,itype: "IPO",iname: "Tesla",idescription: "Автомобили",iprice: "15,5"},
            {id:2, itype: "OTC",iname: "McDonalds",idescription: "Ресторанное заведение",iprice: "17,5"},
            {id:3, itype: "Pre-IPO",iname: "KFC",idescription: "Хавка",iprice: "100"},
            {id:4 ,itype: "IPO",iname: "Tesla",idescription: "Автомобили",iprice: "15,5"},
            {id:5, itype: "OTC",iname: "McDonalds",idescription: "Ресторанное заведение",iprice: "17,5"},
            {id:6, itype: "Pre-IPO",iname: "KFC",idescription: "Хавка",iprice: "100"}]
    }

    let Cards = state.cards.map(c => <ContentCards id={c.id} itype={c.itype} iname={c.iname}
                                                   idescription={c.idescription} iprice={c.iprice}/>);

    return <>
        <LinksMainInvests state={state}/>
        <div className={s.idea_list}>
            <div className={s.idea_list_cards}>
                {Cards}
            </div>
        </div>
    </>
}

export default InvestmentsContainer;