const initialState = {
    text: ['Лучшие инвестиционные идеи','Инвестиции в IPO','Инвестиции в Pre-IPO','Инвестиции OTC','Инвестиции в акции и ETF'],
    cards: [{id: 1, itype: "IPO", iname: "Tesla", idescription: "Автомобили", iprice: "15,5"},
        {id: 2, itype: "OTC", iname: "McDonalds", idescription: "Ресторанное заведение", iprice: "17,5"},
        {id: 3, itype: "Pre-IPO", iname: "KFC", idescription: "Хавка", iprice: "100"},
        {id: 4, itype: "IPO", iname: "Tesla", idescription: "Автомобили", iprice: "15,5"},
        {id: 5, itype: "OTC", iname: "McDonalds", idescription: "Ресторанное заведение", iprice: "17,5"},
        {id: 6, itype: "Pre-IPO", iname: "KFC", idescription: "Хавка", iprice: "100"}]
}

const cardsReducer = (state = initialState) => {
    return state;
}

export default cardsReducer;