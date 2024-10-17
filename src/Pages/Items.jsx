import React, {useContext, useEffect, useState} from 'react';
import Cards from "../components/Card/Cards";
import {useFetching} from "../hooks/useFetching";
import {SneakersService} from "../API/SneakersService";
import {AppContext} from "../context/CartContext";
import Search from "../components/Search/Search";

const Items = ({}) => {
    const {items,cartItems, setCartItems} = useContext(AppContext)
    const addToCart = (id) => {
        const cartItem = cartItems.findIndex(item => item.id === id)
        if (cartItem === -1) {
            const addToCartItem = items.filter(item => item.id === id);
            setCartItems([...cartItems, ...addToCartItem])
        } else {
            setCartItems(cartItems.filter(item => item.id !== id))
        }
    }

    return (
        <>
            <div className="title">
                <h1>Все кроссовки</h1>
                <Search/>
            </div>

            <Cards items={items}/>

        </>
    );
};

export default Items;
