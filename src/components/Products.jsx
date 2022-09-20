import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
function Products({products:{products,cart},dispatch}) {
    var navigate = useNavigate()
    console.log(products)
    function addToCart(p){
        dispatch({type:'ADDTOCART',payload:p})
    }
    function isInCart(p){
        var temp = cart.filter((cp,i)=>{
            if(cp.id===p.id){
                return true
            }
            else{
                return false
            }
        })
        return !(temp.length===0)
    }
    return(
        <div className="d-flex flex-wrap justify-content-around "> 
            {
                products.map((p,i)=>{
                    return (
                <div className="card m-2" style={{width:"200px"}}>
                <img className="card-img-top" src={p.image} alt="Card image" style={{width:"100%",height:'150px'}}/>
                <div className="card-body">
                <b>{p.title}</b>
                <p className="card-text">
                    {p.rating.rate}
                    </p>
                <a href="#" className="btn btn-primary">{p.price}</a>
                {isInCart(p) && (<button onClick={()=>{navigate("/cart")}}>Go TO CART</button>)}
                {!isInCart(p) && (<button className="btn btn-success" onClick={()=>{addToCart(p)}}>Add To Cart</button>)}
                </div>
            </div>
        
                    )
                })
            }
         </div>  
    )
}
export default connect(store=>store) (Products)