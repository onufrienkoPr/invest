import React from 'react';
import ContentContainer from "../../Content/ContentConteiner";


const PreIPOContainer = () => {
    let state = {
        text: 'Инвестиции в Pre-IPO'
    }
    return <>
        <ContentContainer state={state}/>
        <h3><div>Инвестиции в Pre-IPO</div></h3>
    </>
}

export default PreIPOContainer;