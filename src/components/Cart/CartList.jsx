import React, {useContext} from 'react';
import CartItem from "./CartItem";
import cl from "./Cart.module.scss"

const CartList = ({items,deleteItem}) => {

    return (
        <div className={cl.cartItems}>
            {items.map(item=><CartItem key={item.id} item={item} deleteItem={deleteItem}/>)}
        </div>
    );
};

export default CartList;
