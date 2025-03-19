import {useCart} from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart=()=>{
    const {cart, removeFromCart}=useCart();
    const navigate=useNavigate();

    const totalPrice=cart.reduce((acc,item)=>acc+item.pcost * item.quantity,0);

    return(
        <div className="cart-container">
            {/* Back Button with New Styles */}
            <button className="back-button cart-back" onClick={()=>navigate(-1)}>Back</button>
            <h2>Your Cart</h2>
            {cart.length===0?(
                <p>Cart is empty</p>
            ):(
                <div>
                    {cart.map(item=>(
                        <div key={item.uniqueKey} className="cart-item">
                            <img src={item.pimage} alt={item.pname}/>
                            <div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}