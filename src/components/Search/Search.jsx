import React from 'react';
import MyInput from "../UI/Input/MyInput";
import cl from "./Search.module.scss"
const Search = ({text, onChange}) => {
    return (
        <>
            <div className={cl.search}>
                <img src="/img/search.svg" alt="Search"/>
                <MyInput placeholder="Поиск..." value={text} onChange={(e)=>onChange(e.target.value)}/>
            </div>
        </>
    );
};

export default Search;
