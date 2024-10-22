import React, {useContext, useEffect, useState} from 'react';
import cl from './Card.module.scss'
import {AppContext} from "../../context/AppContext";
import MyButton from "../UI/Button/MyButton";

const Card = ({item, type}) => {
    const {
        cartItems,
        addItemToCart,
        deleteItemFromCart,

        favorites,
        addFavorite,
        deleteFavorite,
    } = useContext(AppContext);

    //toggleToAdd
    const [toggleToAdd, setToggleToAdd] = useState(false);
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

    //favorite
    const [toggleFavorite, setToggleFavorite] = useState(false);
    useEffect(() => {
        if (favorites.some(favorite => favorite.itemId === item.itemId)) {
            setToggleFavorite(true)
        } else {
            setToggleFavorite(false)
        }
    }, [favorites]);
    const onFavorite = () => {
        if (toggleFavorite) {
            const indexFavorites = favorites.findIndex(favorite => favorite.itemId === item.itemId)
            const idFavorites = favorites[indexFavorites].id
            deleteFavorite(idFavorites)
            setToggleFavorite(false)
        } else {
            addFavorite(item)
            setToggleFavorite(true)
        }
    }


    return (
        <div className={cl.card}>
            {type === 'items' && <MyButton type="heart" onClick={onFavorite}>
                {toggleFavorite
                    ? <img src="./img/heartLiked.svg" alt="liked"/>
                    : <img src="./img/heart.png" alt="to like"/>}
            </MyButton>}

            <img src={item.imageUrl} className={cl.itemImg} alt="sneakers"/>
            <h5>{item.title}</h5>
            <div className={cl.cardBottom}>
                <div className={cl.cardPrice}>
                    <span>Цена:</span>
                    <b>{item.price} руб.</b>
                </div>
                {type === 'items' && <MyButton type="add" onClick={onClickAddBtn}>
                    {toggleToAdd
                        ? <img src="./img/greenCheck.svg" alt="check"/>
                        : <img src="./img/plus.svg" alt="plus"/>}
                </MyButton>}
            </div>
        </div>
    );
};

export default Card;