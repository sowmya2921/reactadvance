const initialState = {
    todos:['apple','mango','banana']
}
function todoReduce(state=initialState,action){
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state

}
export default todoReduce