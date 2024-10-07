import React from 'react';
import cl from './Drawer.module.scss'

const Drawer = ({}) => {
    return (
        <div className={cl.overlay} style={{display:"none"}}>
            <div className={cl.drawer}>
                <h2>Корзина  <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/></h2>
                <div className="items">
                    <div className={cl.cartItem}>
                        <img className={cl.imgItem} src="/img/sneakers/1.jpg" alt="Sneakers"/>
                        <div>
                            <p className={cl.descItem}>Мужские Кроссовки Nike Air Max 270</p>
                            <b className={cl.priceItem}>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
                    </div>
                </div>
                <div className={cl.cartTotalBlock}>
                    <ul className="">
                        <li><span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className={cl.greenBtn}>Оформить заказ <img src="/img/arror.svg" alt="arror"/></button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
