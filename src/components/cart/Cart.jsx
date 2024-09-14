import React from 'react'
import './Cart.css'
const Cart = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="title">
                <h3>Cart</h3>
            </div>
            <div className="item-added-to-cart">
                <div className="details">
                    <ol>
                        <li>Classic white metal watch</li>
                    </ol>
                    <p>x1</p>    
                </div>
                <div className='check-price'>
                    <p>Rs.12999.99</p>
                    <button className='checkout'>checkout</button> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart 
