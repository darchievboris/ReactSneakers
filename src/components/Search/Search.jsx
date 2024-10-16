import React from 'react';
import MyInput from "../UI/Input/MyInput";
import cl from "./Search.module.scss"
const Search = ({}) => {
    return (
        <>
            <div className={cl.search}>
                <img src="/img/search.svg" alt="Search"/>
                <MyInput placeholder="Поиск..."/>
            </div>
        </>
    );
};

export default Search;
