import React from 'react';
import ContentMyInvents from "../../../components/ContentMyInvents/ContentMyInvents";

const ArhiveContainer = () => {
    let state = {
        text: 'Архив инвестиций'
    }
    return <>
        <ContentMyInvents state={state}/>
        <h3><div>Архив инвестиций</div></h3>
    </>
}
export default ArhiveContainer;