import {combineReducers, createStore} from 'redux';
import cardsReducer from "./cards-reducer";
import ideaReducer from "./idea-reducer";
import {reducer as formReducer} from 'redux-form'

let reducer = combineReducers({
    invests: cardsReducer,
    ideas: ideaReducer,
    form: formReducer
});

const store = createStore(reducer);

window.store = store;

export default store;