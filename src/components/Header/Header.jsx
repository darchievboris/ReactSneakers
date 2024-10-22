import React, {useContext, useState} from 'react';
import cl from './Header.module.scss'
import {Link} from "react-router-dom";
import {AppContext} from "../../context/AppContext";
import {countTotalPriceFromArray} from "../../Utile/formatNumberToPrice";

const Header = ({}) => {
    const {setToggleDrawer,cartItems}=useContext(AppContext)
    const [totalPrice]= countTotalPriceFromArray(cartItems)
    return (
        <header>
            <div className={cl.headerLeft}>
                <Link to="/">
                    <img src="img/logo.png" className={cl.logo}/>
                    <div className="headerInfo">
                        <h3>React Sneakers</h3>
                        <p>Магазин луших кроссовок</p>
                    </div>
                </Link>
            </div>

            <ul className={cl.headerRight}>
                <Link onClick={()=>setToggleDrawer(prevState=>!prevState)}>
                    <li>
                        <img src="img/cart.svg" alt="cart"/>
                        <span>{totalPrice}</span>
                    </li>
                </Link>

                <Link to="favorites">
                    <li>
                        <img src="img/heart.png" alt="favorites"/>
                        <span>Закладки</span>
                    </li>
                </Link>

                <Link to="orders">
                    <li>
                        <img src="img/user.svg" alt="user"/>
                        <span>Заказы</span>
                    </li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;
