import AppRoutes from "./RouterDom/AppRoutes";
import {AppContext} from "./context/CartContext";
import {useEffect, useState} from "react";
import {useFetching} from "./hooks/useFetching";
import {SneakersService} from "./API/SneakersService";

function App() {
    const [toggleDrawer, setToggleDrawer] = useState(false);

    //Cart
    const [cartItems, setCartItems] = useState([]);
    const [items, setItems] = useState([]);

    const [fetchingAllData, loading, error] = useFetching(async () => {
        const responseCart = await SneakersService.getAllFromCart()
        setCartItems(responseCart)
        const responseItems = await SneakersService.getAll()
        setItems(responseItems)
    })

    useEffect(() => {
        fetchingAllData()
    }, []);

    async function deleteItemFromCart(id) {
        await SneakersService.deleteItemFromCart(id)
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    async function addItemToCart(item){
        setCartItems([...cartItems,item])
        SneakersService.addItemToCart(item)
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

