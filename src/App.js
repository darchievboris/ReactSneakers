import AppRoutes from "./RouterDom/AppRoutes";
import {AppContext} from "./context/CartContext";
import {useEffect, useState} from "react";
import {useFetching} from "./hooks/useFetching";
import {Api} from "./Utile/api";

function App() {
    const [toggleDrawer, setToggleDrawer] = useState(false);

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([])
    const [orders, setOrders] = useState([])

    const [fetchingAllData, loading, error] = useFetching(async () => {
        const responseCart = await Api.getAllFromCart()
        setCartItems(responseCart)
        const responseItems = await Api.getAllItems()
        setItems(responseItems)
        const responseFavorites = await Api.getAllFavorites()
        setFavorites(responseFavorites)
        const responseOrders = await Api.getAllFavorites()
        setOrders(responseOrders)
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

   async function addFavorite(item){
        await Api.addItemToFavorites(item)
        setFavorites([...favorites,item])
    }
   async function deleteFavorite(id){
       await Api.deleteItemFromFavorites(id)
       setFavorites(favorites.filter(favorite => favorite.id !== id))
    }
    return (
        <AppContext.Provider value={{
            items,
            cartItems,
            toggleDrawer,
            setToggleDrawer,
            deleteItemFromCart,
            addItemToCart,
            favorites,
            addFavorite,
            deleteFavorite,
        }}>
            <AppRoutes/>
        </AppContext.Provider>
    );
}

export default App;

