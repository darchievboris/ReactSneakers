import AppRoutes from "./RouterDom/AppRoutes";
import {AppContext} from "./context/CartContext";
import {useEffect, useState} from "react";
import {useFetching} from "./hooks/useFetching";
import {Api} from "./Utile/api";

function App() {
    const [toggleDrawer, setToggleDrawer] = useState(false);

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const [fetchingAllData, loading, error] = useFetching(async () => {
        const responseCart = await Api.getAllFromCart()
        setCartItems(responseCart)
        const responseItems = await Api.getAll()
        setItems(responseItems)
    })

    useEffect(() => {
        fetchingAllData()
    }, []);

    async function deleteItemFromCart(id) {
        await Api.deleteItemFromCart(id)
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    async function addItemToCart(item){
        await Api.addItemToCart(item)
        setCartItems([...cartItems,item])
    }

    return (
        <AppContext.Provider value={{
            items,
            cartItems,
            toggleDrawer,
            setToggleDrawer,
            deleteItemFromCart,
            addItemToCart
        }}>
            <AppRoutes/>
        </AppContext.Provider>
    );
}

export default App;

