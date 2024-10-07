import React, {createContext, useEffect, useState} from 'react';
import Cards from "../components/Card/Cards";
import {useFetching} from "../hooks/useFetching";
import {SneakersService} from "../API/SneakersService";

const Items = ({}) => {
    const [items, setItems] = useState([]);
    createContext({})

    const [cartItems, setCartItems] = useState([]);

    const [fetching, loading, error] = useFetching(async () => {
        const response = await SneakersService.getAll()
        setItems(response)
    })

    useEffect(() => {
        fetching()
    }, []);
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
                <div className="searchBlock">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>
            <Cards items={items} addToCart={addToCart}/>

        </>
    );
};

export default Items;
