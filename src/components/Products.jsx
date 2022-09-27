import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addProductToCart, getAllProducts} from '../store/actions'
function Products({products:{products,cart,isLoading},dispatch}) {
    var navigate = useNavigate()
    console.log(products)
    function addToCart(p){
        dispatch(addProductToCart(p))
    }
    React.useEffect(()=>{
        dispatch(getAllProducts())
    },[])
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
    return (
        <div className='d-flex flex-wrap justify-content-around'>
            {isLoading &&(<div class="spinner-border"></div>)}
            {
                products.map((p,i)=>{
                    return (
                        <div className="card m-2 text-center" style={{width:'250px'}}>
                            <div className='text-center'>
                                <img className="card-img-top" src={p.image} alt="Card image" style={{width:'50%',height:'100px'}} />
                            </div>
                            <div className="card-body">
                                <b>{p.title}</b>
                            </div>
                            <div className='card-footer'>
                                <div className='d-flex justify-content-between'>
                                    <h3><i class="bi bi-star-fill"></i>{p.rating.rate}</h3>
                                    <h3>{p.price}</h3>
                                </div>
                                {isInCart(p) && (<button className='btn btn-warning btn-sm' onClick={()=>{navigate("/cart")}}>Goto Cart</button>)}
                                {!isInCart(p) && (<button className='btn btn-success btn-sm' onClick={()=>{addToCart(p)}}>Add To Cart</button>)}
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default connect(store=>store)(Products) 