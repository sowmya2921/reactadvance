import React,{useState} from "react";
import { connect } from 'react-redux'
function Todolist(props){
    const [newtodo,setnewtodo] = useState('')
    function addtodo(){
        props.dispatch({type:'ADDTODO',payload:newtodo})
    }
    return(
        <div className="betterview">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
            <button onClick={addtodo}>Add Todo</button>
            {
                props.todolist.todos.map((t)=>{
                    return <li>{t}</li>
                })
            }
        </div>
    )
}
export default connect((store)=>{return store})(Todolist)