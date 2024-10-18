import React, {useContext, useEffect, useState} from 'react';
import Cards from "../components/Card/Cards";
import {useFetching} from "../hooks/useFetching";
import {Api} from "../Utile/api";
import {AppContext} from "../context/CartContext";
import Search from "../components/Search/Search";

const Items = ({}) => {
    const {items} = useContext(AppContext)

    return (
        <>
            <div className="title">
                <h1>Все кроссовки</h1>
                <Search/>
            </div>

            <Cards items={items}/>

        </>
    );
};

export default Items;
