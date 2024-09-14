import React, { useState } from 'react'
import shopping_cart_icon from "../../assets/shopping_cart_icon.svg"
import wishlist_icon from "../../assets/heart_notfill.svg"
import wishlist_filled_icon from "../../assets/heart_filled.svg"
import './ProductList.css'
import watches from "./watches.js"
import bags from "./bags.js"
import hats from "./hats.js"
import sunglasses from "./sunglasses.js"
import menu_icon from "../../assets/list_bullets_icon.svg"
import search_con from "../../assets/search_con.svg"
import Watches from '../watches/Watches.jsx'
import Bags from '../Bags/Bags.jsx'
import Hats from '../Hats/Hats.jsx'
import Sunglasses from '../sunglasses/Sunglasses.jsx'

const ProductList = () => {
  return (
    <div className='app'>
        <div className="header-section">
            <div className="logo">
                <h1>Shofyy</h1>
            </div>
            <div className="search-box">
                <div className="search-max-box">
                    <input type="text" name="search" id="" placeholder='search items...'/>
                    <img src={search_con} alt="" />
                </div> 
            </div>
            <div className="cart-wishlist-login">
                <div className="cart">
                    <img src={shopping_cart_icon} alt="" />
                    <div className="number">0</div>
                    <p>Cart</p>
                </div>
                <div className="cart">
                    <img src={wishlist_icon} alt="" />
                    <div className="number">0</div>
                    <p>Wishlist</p>
                </div>
                <div className="cart">
                    <div className="round">T</div>
                </div>
                
            </div>
            <div className="menu-icon">
                    <img src={menu_icon} alt="" />
            </div>
        </div>
        {/****watches */}
        <Watches />
       { /****bags */}
        <Bags />
        { /****hats */}
        <Hats />
        { /****sunglasses */}
        <Sunglasses />
    </div>
  )
}

export default ProductList;
