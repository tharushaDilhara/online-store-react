import React from 'react'
import shopping_cart_icon from "../../assets/shopping_cart_icon.svg"
import wishlist_icon from "../../assets/heart_notfill.svg"
import wishlist_filled_icon from "../../assets/heart_filled.svg"
import menu_icon from "../../assets/list_bullets_icon.svg"
import search_con from "../../assets/search_con.svg"
import bags from '../productList/bags'
const Bags = () => {
  return (
    <div className="items-list">
            <div className="title-items">
                <h2>Bags</h2>
            </div>
            <div className="items-card">
                    {bags.map((bag,index)=>{
                        return <div className="item" key={index}>
                            <img src={bag.img} className="prod-img" alt="" />
                            <h4>{bag.name}</h4>
                            <p>Rs.{bag.price}</p>
                            <div className="wishlist-addtocart">
                                <div className="cart">
                                    <img src={shopping_cart_icon} className='icon' alt="" />
                                    <a href="" >Add to cart</a>
                                </div>
                                <div className="buy-now">
                                    <a href="" >Buy now</a>
                                </div>
                                <div className="cart2">
                                    <img src={wishlist_filled_icon} className='icon' alt="" />
                                </div>
                            </div>
                        </div>
                    })}
                    
            </div>
        </div>
  )
}

export default Bags
