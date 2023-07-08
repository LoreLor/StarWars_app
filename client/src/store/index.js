import { compose, legacy_createStore as createStore, applyMiddleware} from 'redux'
import { combineReducers } from "redux";
import { charactersReducer } from "./reducers/charactersReducer";
import thunk from 'redux-thunk'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        characters: charactersReducer,
    }),
    composeEnhancer(applyMiddleware(thunk)))

export default store