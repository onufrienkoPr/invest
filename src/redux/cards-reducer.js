const initialState = {
    // text: [{id: 1, text: 'Лучшие инвестиционные идеи'},{id: 2, text: 'Инвестиции в IPO'}],
    // Добавь массив из объектов для загловка investments
    text: 'Лучшие инвестиционные идеи',
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