import React from 'react';
import s from "./IPO.module.css";
import ContentCards from "../Content_cards/Content_cards";
import LinksMainInvests from "../../../LinksMainInvests/LinksMainInvests";

const IPOContainer = (props) => {

    let state = props.invests;

    let Cards = state.cards.map(c =>  { if (c.itype === "IPO") {
        return <ContentCards id={c.id} itype={c.itype} iname={c.iname}
                                                   idescription={c.idescription} iprice={c.iprice} />}});

    return <>
        <LinksMainInvests state={state.text[1]}/>
        <div className={s.idea_list}>
            <div className={s.idea_list_cards}>
                {Cards}
            </div>
        </div>
    </>
}

export default IPOContainer;