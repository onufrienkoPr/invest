import React from 'react';
import ContentContainer from "../../Content/ContentConteiner";


const InvestmentsContainer = () => {
    let state = {
        text: 'Лучшее'
    }
    return <>
        <ContentContainer state={state}/>
        <h3><div>Лучшее</div></h3>
    </>
}

export default InvestmentsContainer;