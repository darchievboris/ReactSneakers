import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";
import Cards from "../components/Card/Cards";
import Info from "../components/Info";

const Favorites = ({}) => {
    const {favorites} = useContext(AppContext)

    const contentFavorites = favorites.length>0 &&(<>
        <div className="title">
            <h1>Мои закладки</h1>
        </div>
        <Cards items={favorites}/>
    </>)

    return (
        <>
            {contentFavorites}
            {favorites.length===0&& <Info type="emptyFavorites"/>}
        </>
    );
};

export default Favorites;
