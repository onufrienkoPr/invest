import React from 'react';
import ContentContainer from "../../LinksMainInvests/LinksMainInvests";
import './Investments.css'

const InvestmentsContainer = () => {
    let state = {
        text: 'Лучшие инвестиционные идеи'
    }
    return <>
        <ContentContainer state={state}/>
        <div className="idea_list">
            <div className="idea_list-cards">
                <div className="idea_cards">1 контейнер</div>
                <div className="idea_cards">2 контейнер</div>
                <div className="idea_cards">3 контейнер</div>
                <div className="idea_cards">4 контейнер</div>
                <div className="idea_cards">5 контейнер</div>
                <div className="idea_cards">6 контейнер</div>
            </div>
        </div>
    </>
}

export default InvestmentsContainer;