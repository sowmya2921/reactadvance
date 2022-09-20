import React from "react";
import { connect } from "react-redux";
function Cart({products:{cart},dispatch}){
    console.log(cart)
    function dec(cp){
        if(cp.count===1){
            dispatch({type:'DELETE-CART-PROD',payload:cp})
        }
        dispatch({type:'DEC-CART-PROD-COUNT',payload:cp})
    }
    return(
        <div>
            <h1>Cart</h1>
            {
                cart.map((cp,i)=>{
                   return (<li>
                              {cp.title}-----{cp.price}
                              <button onClick={()=>{dispatch({type:'INC-CART-PROD-COUNT',payload:cp})}}>+</button>
                              <b>{cp.count}</b>
                              <button onClick={()=>{dec(cp)}}>-</button>
                              <button onClick={()=>{dispatch({type:'DELETe-CART-PROD',payload:cp})}}>Delete</button>

                          </li>)
                })
            }
            <h1>Total:</h1>
        </div>
    )
}
export default connect(store=>store) (Cart)