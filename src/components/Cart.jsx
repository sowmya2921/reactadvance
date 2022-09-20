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
    function total(){
        return cart.reduce((a,b)=>{
            return a+(b.price*b.count)
        },0)
    }
    return(
        <div className="container">
             <table className="table table-striped text-center">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Count</th>
        <th>Total</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
                cart.map((cp,i)=>{
                   return (<tr>
                    <td className="text-right"> {cp.title}</td>
                    <td>{cp.price}</td>
                    <td>
                    <i className="bi bi-plus-circle-fill" onClick={()=>{dispatch({type:'INC-CART-PROD-COUNT',payload:cp})}}></i>
                    <b className="m-2">{cp.count}</b>
                    <i className="bi bi-dash-circle-fill" onClick={()=>{dec(cp)}}></i>
                    </td>
                    <td className="text-center">{cp.price*cp.count}</td>
                    <td className="text-center">
                    <i className="bi bi-trsh-fill" onClick={()=>{dispatch({type:'DELETE-CART-PROD',payload:cp})}}></i>
                    </td>
                    </tr>)
                })
            }
    </tbody>
  </table>
           
        <h1 className="text-center">Total:{cart.length && total()}</h1>
        </div>
    )
}
export default connect(store=>store) (Cart)