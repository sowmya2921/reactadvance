import counterReducer from "./counterReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import todoReaducer from "./todoReducer";
import productReducer from "./productReducer";
import thunk from 'redux-thunk'
import countriesReducer from "./countriesReducer";
var reducer = combineReducers({
    counter:counterReducer,
    todolist:todoReaducer,
    products:productReducer,
    countries:countriesReducer
})
var mainstore = new createStore(reducer,applyMiddleware(thunk))

export default mainstore;