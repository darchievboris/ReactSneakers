import React from 'react';
import Card from "./Card";
import cl from './Cards.module.scss'
import SCard from "../UI/Skeleton/SCard";

const Cards = ({items, loading ,type="items"}) => {

    const skeleton = loading && new Array(12).fill(1).map((_, index) => <SCard key={index}/>)
    return (
        <div className={cl.cards}>
            {loading
                ? skeleton
                : items.map(item => <Card key={item.itemId} item={item} type={type}/>)
            }
        </div>
    );
};


export default Cards;
