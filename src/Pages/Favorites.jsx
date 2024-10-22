import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";
import Search from "../components/Search/Search";
import Cards from "../components/Card/Cards";

const Favorites = ({}) => {
    const {favorites} = useContext(AppContext)

    return (
        <>
            <div className="title">
                <h1>Мои закладки</h1>
            </div>

            <Cards items={favorites}/>

        </>
    );
};

export default Favorites;
