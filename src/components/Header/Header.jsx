import React from 'react';
import cl from './Header.module.scss'
import {Link} from "react-router-dom";

const Header = ({}) => {
    return (
        <header>
            <div className={cl.headerLeft}>
                <Link to="/">
                    <img src="/img/logo.png" className={cl.logo}/>
                    <div className="headerInfo">
                        <h3>React Sneakers</h3>
                        <p>Магазин луших кроссовок</p>
                    </div>
                </Link>
            </div>
            <ul className={cl.headerRight}>

                <li>
                    <img src="./img/cart.svg" alt="cart"/>
                    <span>1200 руб.</span>
                </li>

                <Link to="favorites">
                    <li>
                        <img src="./img/hard.png" alt="favorites"/>
                        <span>Закладки</span>
                    </li>
                </Link>

                <Link to="orders">
                    <li>
                        <img src="./img/user.svg" alt="user"/>
                        <span>Профиль</span>
                    </li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;
