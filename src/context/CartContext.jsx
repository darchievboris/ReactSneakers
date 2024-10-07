import React, {createContext} from 'react';

const Context = createContext({});
const CartContext = ({children,...props}) => {
    return (
        <Context.Provider value={{...props}}>
            {children}
        </Context.Provider>
    );
};

export default CartContext;
