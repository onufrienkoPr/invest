import React from 'react';
import ContentMyInvents from "../../LinksMyInvests/LinksMyInvests";

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