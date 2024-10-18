import React, {useContext, useEffect, useState} from 'react';
import cl from './Card.module.scss'
import {AppContext} from "../../context/CartContext";

const Card = ({item}) => {
    const [toggleToAdd, setToggleToAdd] = useState(false);
    const {addItemToCart, cartItems, deleteItemFromCart} = useContext(AppContext);
    const onClickAddBtn = () => {
        if (toggleToAdd) {
            const indexItemFromCart = cartItems.findIndex(cartItem => cartItem.itemId === item.itemId)
            const idItemFromCart = cartItems[indexItemFromCart].id
            deleteItemFromCart(idItemFromCart)
            setToggleToAdd(false)
        } else {
            addItemToCart(item)
            setToggleToAdd(true)
        }

    }
    useEffect(() => {
        if (cartItems.some(cartItem => cartItem.itemId === item.itemId)) {
            setToggleToAdd(true)
        } else {
            setToggleToAdd(false)
        }
    }, [cartItems]);


    return (
        <div className={cl.card}>
            <img className={cl.favorit} src="/img/heartLiked.svg" alt="liked"/>
            <img src={item.imageUrl} alt="sneakers"/>
            <h5>{item.title}</h5>
            <div className={cl.cardBottom}>
                <div className={cl.cardPrice}>
                    <span>Цена:</span>
                    <b>{item.price} руб.</b>
                </div>
                <button className={cl.button} onClick={onClickAddBtn}>
                    {toggleToAdd
                        ? <img src="./img/greenCheck.svg" alt="check"/>
                        : <img src="./img/plus.svg" alt="plus"/>}
                </button>
            </div>
        </div>
    );
};

export default Card;