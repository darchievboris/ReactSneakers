import React, {useContext} from 'react';
import Cards from "../components/Card/Cards";
import {AppContext} from "../context/AppContext";
import {convertMsToDate} from "../Utile/convertDate";
import MyButton from "../components/UI/Button/MyButton";
import Info from "../components/Info";

const Orders = ({}) => {
    const {orders, deleteOrder} = useContext(AppContext);

    const contentOrders = orders.length>0 &&(<>
        <div className="title">
            <h1>Мои покупки</h1>
        </div>
        {orders.map((order, index) => (
            <div key={order.id}>
                <hr/>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                    <h2>Заказа №{index + 1}</h2>
                    <div><strong>{convertMsToDate(order.orderId)}</strong></div>
                    <MyButton type="remove" onClick={() => deleteOrder(order.id)}/>
                </div>
                <hr/>
                <Cards items={order.items} type="orders"/>
            </div>
        ))
        }
    </>)


    return (
        <>
            {contentOrders}
            {orders.length===0&& <Info type="emptyOrders"/>}
        </>
    );
};

export default Orders;
