import React from 'react';
import LinksMainInvests from "../../LinksMainInvests/LinksMainInvests";


const StocksContainer = () => {
    let state = {
        text: 'Инвестиции в акции и ETF'
    }
    return <>
        <LinksMainInvests state={state}/>
        <h3><div>Инвестиции в акции и ETF</div></h3>
    </>
}

export default StocksContainer;