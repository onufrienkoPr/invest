import React from 'react';
import ContentMyInventsContainer from "../../../ContentMyInvents/ContentMyInvents";

const MyInventsContainer = () => {
    let state = {
        text: 'Мои инвестиции'
    }
    return <>
        <ContentMyInventsContainer state={state}/>
        <h3><div>Мои инвестиции</div></h3>
    </>
}
export default MyInventsContainer;