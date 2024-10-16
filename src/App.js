import AppRoutes from "./RouterDom/AppRoutes";
import {AppContext} from "./context/CartContext";
import {useEffect, useState} from "react";
import {useFetching} from "./hooks/useFetching";
import {SneakersService} from "./API/SneakersService";

function App() {
    const [toggleDrawer, setToggleDrawer] = useState(false);

    //Cart
    const [cartItems, setCartItems] = useState([]);

    const [fetchingAllItemsFromCart, loading, error] = useFetching(async () => {
        const response = await SneakersService.getAllFromCart()
        setCartItems(response)
    })

    useEffect(() => {
        fetchingAllItemsFromCart()
    }, []);

    async function deleteItemFromCart(id) {
        setCartItems(cartItems.filter(item => item.id !== id))
        await SneakersService.deleteItemFromCart(id)
    }

    async function addItemToCart(item){
        SneakersService.addItemToCart(item)

    }

    return (
        <AppContext.Provider value={{
            toggleDrawer,
            setToggleDrawer,
            cartItems,
            deleteItemFromCart,
            addItemToCart
        }}>
            <AppRoutes/>
        </AppContext.Provider>
    );
}

export default App;

