import React from 'react';
import ContentContainer from "../../Content/ContentConteiner";


const IPOContainer = () => {
    let state = {
        text: 'Инвестиции в IPO'
    }
    return <>
        <ContentContainer state={state}/>
        <h3><div>Инвестиции в IPO</div></h3>
    </>
}

export default IPOContainer;