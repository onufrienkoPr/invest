import React from 'react';
import LinksMainInvests from "../../../LinksMainInvests/LinksMainInvests";


const PreIPOContainer = () => {
    // Пока нет заголовка, так как надо подключать connect, чтобы редюсер работал
    return <>
        <LinksMainInvests/>
        <h3><div>Инвестиции в Pre-IPO</div></h3>
    </>
}

export default PreIPOContainer;