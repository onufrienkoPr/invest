import React from 'react';
import LinksMainInvests from "../../../LinksMainInvests/LinksMainInvests";


const StocksContainer = (props) => {
    // Пока нет заголовка, так как надо подключать connect, чтобы редюсер работал
    return <>
        <LinksMainInvests/>
        <h3><div>Инвестиции в акции и ETF</div></h3>
    </>
}

export default StocksContainer;