import React from 'react';
import LinksMainInvests from "../../LinksMainInvests/LinksMainInvests";
import ContentCards from "./Content_cards/Content_cards";
import s from "./Investments.module.css";

const InvestmentsContainer = (props) => {

    let state = props.invests;

    let Cards = state.cards.map(c => <ContentCards id={c.id} itype={c.itype} iname={c.iname}
                                                   idescription={c.idescription} iprice={c.iprice} />);

    return <>
        <LinksMainInvests state={state.text[0]}/>
        <div className={s.idea_list}>
            <div className={s.idea_list_cards}>
                {Cards}
            </div>
        </div>
    </>
}

export default InvestmentsContainer;