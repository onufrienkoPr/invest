import React from 'react';
import ContentContainer from "../../Content/ContentConteiner";


const StocksContainer = () => {
    let state = {
        text: 'Инвестиции в акции и ETF'
    }
    return <>
        <ContentContainer state={state}/>
        <h3><div>Инвестиции в акции и ETF</div></h3>
    </>
}

export default StocksContainer;