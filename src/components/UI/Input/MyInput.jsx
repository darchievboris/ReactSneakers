import React from 'react';
import cl from './MyInput.module.scss'

const MyInput = ({children,  className = "", ...props}) => {
    const classes = [cl.input, className].join(" ")

    return <input className={classes} {...props}/>
};

export default MyInput;
