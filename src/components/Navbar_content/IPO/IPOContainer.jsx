import React from 'react';
import LinksMainInvests from "../../LinksMainInvests/LinksMainInvests";


const IPOContainer = () => {
    let state = {
        text: 'Инвестиции в IPO'
    }
    return <>
        <LinksMainInvests state={state}/>
    </>
}

export default IPOContainer;