import React from 'react';
import LinksMainInvests from "../../LinksMainInvests/LinksMainInvests";


const PreIPOContainer = () => {
    let state = {
        text: 'Инвестиции в Pre-IPO'
    }
    return <>
        <LinksMainInvests state={state}/>
        <h3><div>Инвестиции в Pre-IPO</div></h3>
    </>
}

export default PreIPOContainer;