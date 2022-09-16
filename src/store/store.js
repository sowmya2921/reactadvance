import counterReducer from "./counterReducer";
import { createStore} from "redux"

var mainstore = new createStore(counterReducer)

export default mainstore