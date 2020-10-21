import React from 'react';
import ContentContainer from "../../Content/ContentConteiner";


const InvestmentsContainer = () => {
    let state = {
        text: 'Лучшие инвестиционные идеи'
    }
    return <>
        <ContentContainer state={state}/>
        <h3><div>Лучшие инвестиционные идеи</div></h3>
    </>
}

export default InvestmentsContainer;