import React from 'react';
import LinksMainInvests from "../../LinksMainInvests/LinksMainInvests";


const OTCContainer = () => {
    let state = {
        text: 'Инвестиции OTC'
    }
    return <>
        <LinksMainInvests state={state}/>
        <h3><div>Инвестиции OTC</div></h3>
    </>
}

export default OTCContainer;