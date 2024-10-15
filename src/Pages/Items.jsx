import React, {createContext, useContext, useEffect, useState} from 'react';
import Cards from "../components/Card/Cards";
import {useFetching} from "../hooks/useFetching";
import {SneakersService} from "../API/SneakersService";
import App from "../App";
import {AppContext} from "../context/CartContext";
import MyInput from "../components/UI/Input/MyInput";

const Items = ({}) => {
    const [items, setItems] = useState([]);
    const [fetching, loading, error] = useFetching(async () => {
        const response = await SneakersService.getAll()
        setItems(response)
    })
    useEffect(() => {
        fetching()
    }, []);

    const {cartItems, setCartItems} = useContext(AppContext)
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
                <MyInput className="searchBlock" placeholder="Поиск...">
                    <img src="/img/search.svg" alt="Search"/>
                </MyInput>

                {/*<div className="searchBlock">*/}
                {/*    <img src="/img/search.svg" alt="Search"/>*/}
                {/*    <input placeholder="Поиск..."/>*/}
                {/*</div>*/}
            </div>

            <Cards items={items}/>

        </>
    );
};

export default Items;
