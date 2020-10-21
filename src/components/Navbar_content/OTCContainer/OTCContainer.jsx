import React from 'react';
import ContentContainer from "../../Content/ContentConteiner";


const OTCContainer = () => {
    let state = {
        text: 'Инвестиции OTC'
    }
    return <>
        <ContentContainer state={state}/>
        <h3><div>Инвестиции OTC</div></h3>
    </>
}

export default OTCContainer;