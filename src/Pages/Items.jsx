import React, {useContext, useEffect, useState} from 'react';
import Cards from "../components/Card/Cards";
import {useFetching} from "../hooks/useFetching";
import {Api} from "../Utile/api";
import {AppContext} from "../context/CartContext";
import Search from "../components/Search/Search";

const Items = ({}) => {
    const {items, loading, search, setSearch} = useContext(AppContext)
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <div className="title">
                <h1>Все кроссовки</h1>
                <Search text={search} onChange={setSearch}/>
            </div>

            <Cards items={filteredItems} loading={loading}/>

        </>
    );
};

export default Items;
