import React, {useContext} from 'react';
import Cards from "../components/Card/Cards";
import {AppContext} from "../context/AppContext";
import {convertMsToDate} from "../Utile/convertDate";
import MyButton from "../components/UI/Button/MyButton";

const Orders = ({}) => {
    const {orders, deleteOrder} = useContext(AppContext);

    return (
        <>
            <div className="title">
                <h1>Мои покупки</h1>
            </div>
            {orders.map((order, index) => (
                <div key={order.id}>
                    <hr/>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                        <h2>Заказа №{index + 1}</h2>
                        <div><strong>{convertMsToDate(order.orderId)}</strong></div>
                        <MyButton type="remove" onClick={() => deleteOrder(order.id)}>
                            <img src="img/btn-remove.svg" alt="remove"/>
                        </MyButton>
                    </div>
                    <hr/>
                    <Cards items={order.items} type="orders"/>
                </div>
            ))
            }
        </>
    );
};

export default Orders;
