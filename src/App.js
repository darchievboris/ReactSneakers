import AppRoutes from "./RouterDom/AppRoutes";
import {AppContext} from "./context/CartContext";
import {useEffect, useState} from "react";
import {useFetching} from "./hooks/useFetching";
import {SneakersService} from "./API/SneakersService";

function App() {
    const [toggleDrawer, setToggleDrawer] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const [fetchingAllItemsFromCart, loading, error] = useFetching(async () => {
        const response = await SneakersService.getAllInCart()
        setCartItems(response)
    })

    useEffect(() => {
        fetchingAllItemsFromCart()
    }, []);

    useFetching(async ()=>{
        const response = await SneakersService
    })
    function deleteItemFromCart(itemId) {
        setCartItems(cartItems.filter(item => item.itemId !== itemId))
    }
    function addItemToCart(item){
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

