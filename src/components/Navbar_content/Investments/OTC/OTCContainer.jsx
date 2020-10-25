import React from 'react';
import LinksMainInvests from "../../../LinksMainInvests/LinksMainInvests";

const OTCContainer = () => {
    // Пока нет заголовка, так как надо подключать connect, чтобы редюсер работал
    return <>
        <LinksMainInvests/>
        <h3><div>Инвестиции OTC</div></h3>
    </>
}

export default OTCContainer;