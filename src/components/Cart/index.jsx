import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../context/AppContext";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import Info from "../Info";

const Cart = ({setToggleDrawer}) => {
    const {cartItems, deleteItemFromCart} = useContext(AppContext)
    const [isOrderDona,setIsOrderDona] = useState(false)

    const contentCart = <>
        <CartList items={cartItems} deleteItem={deleteItemFromCart} setIsOrderDona={setIsOrderDona}/>
        <CartTotal items={cartItems} setIsOrderDona={setIsOrderDona}/>
    </>

    return (
        <>
            {cartItems.length>0 && contentCart}
            {cartItems.length===0 && (isOrderDona ? <Info type="orderDone" page={false} />:<Info type="emptyCart" page={false}/>)}
        </>
    );
};

export default Cart;
