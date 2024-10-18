import React from 'react';
import cl from './MyButton.module.scss'

const MyButton = ({children, type, className = "", ...props}) => {
    let classes = ""
    switch (type) {
        case 'remove':
            classes = cl.remove
            break;
        case 'heart':
            classes = cl.heart
            break;
        case 'add':
            classes = cl.add
            break;
        default:
            classes = cl.green
            break;
    }
    classes = [ cl.common, classes, className,].join(" ")

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default MyButton;
