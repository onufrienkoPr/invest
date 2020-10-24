import {combineReducers, createStore} from 'redux';
import cardsReducer from "./cards-reducer";

let reducer = combineReducers({
    invests: cardsReducer
});

const store = createStore(reducer);

window.store = store;

export default store;