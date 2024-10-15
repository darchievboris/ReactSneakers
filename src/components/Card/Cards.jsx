import React from 'react';
import Card from "./Card";
import cl from './Cards.module.scss'
const Cards = ({items}) => {
    if(items.length === 0) return <h1>items don't have</h1>

    return (
        <div className={cl.cards}>
            {items.map(item => <Card key={item.itmeId} item={item}/>)}
        </div>
    );
};

export default Cards;
