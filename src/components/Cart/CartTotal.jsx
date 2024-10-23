import React, {useContext} from 'react';
import cl from "./CartTotal.module.scss";
import MyButton from "../UI/Button/MyButton";
import {countTotalPriceFromArray, formatNumberToPriceWithTax} from "../../Utile/formatNumberToPrice";
import {AppContext} from "../../context/AppContext";

const CartTotal = ({items,setIsOrderDona}) => {
    const [totalPrice, totalPriceWithoutCurrency] = countTotalPriceFromArray(items)
    const tax = formatNumberToPriceWithTax(totalPriceWithoutCurrency, 5)
    const {addOrder} = useContext(AppContext);
    function handleOrderDone(){
        addOrder()
        setIsOrderDona(true)
    }

    return (
        <div className={cl.cartTotalBlock}>
            <div>
                <span>Итого: </span>
                <span className={cl.dashed}/>
                <b>{totalPrice}</b>
            </div>
            <div>
                <span>Налог 5%: </span>
                <span className={cl.dashed}/>
                <b>{tax}</b>
            </div>
            <MyButton className="forward" onClick={handleOrderDone}>Оформить заказ</MyButton>
        </div>

    );
};

export default CartTotal;
