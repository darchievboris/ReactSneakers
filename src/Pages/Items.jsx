import React, {useContext, useEffect, useState} from 'react';
import Cards from "../components/Card/Cards";
import Search from "../components/Search/Search";
import {AppContext} from "../context/AppContext";

const Items = ({}) => {
    const {items, loading} = useContext(AppContext)
    const [search, setSearch] = useState("");
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
