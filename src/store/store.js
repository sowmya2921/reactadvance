import counterReducer from "./counterReducer";
import { combineReducers, createStore} from "redux"
import todoReduce from "./todoReducer";
import productReducer from "./productReducer";

var reducer = combineReducers({counter:counterReducer,todolist:todoReduce,products:productReducer})
var mainstore = new createStore(reducer)

export default mainstore;