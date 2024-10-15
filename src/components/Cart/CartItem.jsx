import React from 'react';
import cl from "./Cart.module.scss"
import MyButton from "../UI/Button/MyButton";
import {formatNumberToPrice} from "../../Utile/formatNumberToPrice";

const CartItem = ({item, deleteItem}) => {
    const price= formatNumberToPrice(item.price)
    return (
        <div className={cl.cartItem}>
            <img className={cl.img} src={item.imageUrl} alt="Sneakers"/>
            <div>
                <p className={cl.desc}>{item.title}</p>
                <b className={cl.price}>{price}</b>
            </div>
            <MyButton type="remove" style={{alignSelf: "flex-end"}} onClick={() => deleteItem(item.itmeId)}>
                <img  src="/img/btn-remove.svg" alt="remove"/>
            </MyButton>
        </div>
    );
};

export default CartItem;
