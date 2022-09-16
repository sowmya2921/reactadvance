import counterReducer from "./counterReducer";
import { combineReducers, createStore} from "redux"
import todoReduce from "./todoReducer";

var reducer = combineReducers({counter:counterReducer,todolist:todoReduce})
var mainstore = new createStore(reducer)

export default mainstore;