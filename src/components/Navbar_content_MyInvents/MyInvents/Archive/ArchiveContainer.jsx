import React from 'react';
import LinksMyInvests from "../../../LinksMyInvests/LinksMyInvests";

const ArhiveContainer = () => {
    let state = {
        text: 'Архив инвестиций'
    }
    return <>
        <LinksMyInvests state={state}/>
        <h3><div>Архив инвестиций</div></h3>
    </>
}
export default ArhiveContainer;