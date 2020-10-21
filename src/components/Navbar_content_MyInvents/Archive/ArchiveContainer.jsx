import React from 'react';
import ContentMyInventsContainer from "../../../ContentMyInvents/ContentMyInvents";

const ArhiveContainer = () => {
    let state = {
        text: 'Архив инвестиций'
    }
    return <>
        <ContentMyInventsContainer state={state}/>
        <h3><div>Архив инвестиций</div></h3>
    </>
}
export default ArhiveContainer;