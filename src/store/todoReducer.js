const initialState = {
    todos:['icecream','biryani','cola']
}
function todoReaducer(state=initialState,action){
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state
}
export default todoReaducer;