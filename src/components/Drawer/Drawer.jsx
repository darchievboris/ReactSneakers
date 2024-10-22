import React, {useContext} from 'react';
import cl from './Drawer.module.scss'
import {AppContext} from "../../context/AppContext";
import CartList from "../Cart/CartList";
import CartTotal from "../Cart/CartTotal";
import MyButton from "../UI/Button/MyButton";

const Drawer = ({}) => {
    const {
        toggleDrawer,
        setToggleDrawer,
        cartItems,
        deleteItemFromCart
    } = useContext(AppContext)

    const closeDrawer = () => {
        setToggleDrawer(prevState => !prevState)
    }

    const extOverlay = toggleDrawer && cl.overlayVisible
    const overlay = [cl.overlay,extOverlay].join(" ")

    return (
        <div className={overlay} onClick={closeDrawer}>
            <div className={cl.drawer} onClick={e => e.stopPropagation()}>
                <h2>
                    Корзина
                    <MyButton type="remove" onClick={closeDrawer}>
                        <img src="img/btn-remove.svg" alt="remove"/>
                    </MyButton>
                </h2>
                <CartList items={cartItems} deleteItem={deleteItemFromCart}/>
                <CartTotal items={cartItems}/>

            </div>
        </div>
    );
};

export default Drawer;
