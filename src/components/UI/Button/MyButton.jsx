import React from 'react';
import cl from './MyButton.module.scss'

const MyButton = ({children, type, className = "", ...props}) => {
    let classes = ""
    let typeImg = ""

    if (type === 'remove') {
        typeImg = <img src="img/btn-remove.svg" alt="remove"/>
    } else if (type === 'heart') {
        classes = cl.heart
        typeImg = <img src="img/heart.png" alt="to like"/>
    } else if (type === 'heartLiked') {
        classes = cl.heart
        typeImg = <img src="img/heartLiked.svg" alt="liked"/>
    } else if (type === 'add') {

    } else {
        classes = cl.green
    }
    classes = [cl.common, classes, className].join(" ")

    return (
        <button className={classes} {...props}>
            {typeImg}
            {children}
        </button>
    );
};

export default MyButton;
