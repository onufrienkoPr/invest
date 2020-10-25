import {combineReducers, createStore} from 'redux';
import cardsReducer from "./cards-reducer";
import ideaReducer from "./idea-reducer";

let reducer = combineReducers({
    invests: cardsReducer,
    ideas: ideaReducer
});

const store = createStore(reducer);

window.store = store;

export default store;