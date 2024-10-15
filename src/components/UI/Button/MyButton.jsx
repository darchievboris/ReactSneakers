import React from 'react';
import cl from './MyButton.module.scss'

const MyButton = ({children, type, className = "", ...props}) => {
    let classes = ""
    switch (type) {
        case 'remove':
            classes = cl.remove
            break;
        default:
            classes = cl.green
            break;
    }
    classes = [classes, className].join(" ")

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default MyButton;
