import React from 'react';
import ContentMyInvents from "../../ContentMyInvents/ContentMyInvents";

const MyInventsContainer = () => {
    let state = {
        text: 'Мои инвестиции'
    }
    return <>
        <ContentMyInvents state={state}/>
        <h3><div>Мои инвестиции</div></h3>
    </>
}
export default MyInventsContainer;