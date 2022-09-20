import React from "react";
import { connect } from 'react-redux'
function Counter(props){
    function inc(){
        props.dispatch({type:'INC'})
    }
    function dec(){
        props.dispatch({type:"DEC"})
    }
    function reset(){
        props.dispatch({type:'RESET'})
    }
    return(
        <div className="betterview">
            <h1>Counter:{props.counter.count}</h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
            <button onClick={reset}>RESET</button>
        </div>
    )
}
export default connect((store)=>{return store})(Counter)