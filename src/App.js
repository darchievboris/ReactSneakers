import AppRoutes from "./RouterDom/AppRoutes";
import {AppContext} from "./context/AppContext";
import {useEffect, useState} from "react";
import {useFetching} from "./hooks/useFetching";
import {Api} from "./Utile/api";

function App() {
    const [toggleDrawer, setToggleDrawer] = useState(false);

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([])
    const [orders, setOrders] = useState([]);

    const [fetchingAllData, loading, error] = useFetching(async () => {
        const [
            responseCart,
            responseItems,
            responseFavorites,
            responseOrders] = await Promise.all(
            [
                Api.getAllFromCart(),
                Api.getAllItems(),
                Api.getAllFavorites(),
                Api.getAllOrders()
            ])

        setCartItems(responseCart)
        setItems(responseItems)
        setFavorites(responseFavorites)
        setOrders(responseOrders)
    })


    useEffect(() => {
        fetchingAllData()
    }, []);

    //carts
    async function deleteItemFromCart(id) {
        await Api.deleteItemFromCart(id)
        setCartItems(prevState => prevState.filter(item => item.id !== id))
    }

    async function addItemToCart(item) {
        await Api.addItemToCart(item)
        setCartItems([...cartItems, item])
    }

    //favorites
    async function addFavorite(item) {
        await Api.addItemToFavorites(item)
        setFavorites([...favorites, item])
    }

    async function deleteFavorite(id) {
        await Api.deleteItemFromFavorites(id)
        setFavorites(favorites.filter(favorite => favorite.id !== id))
    }

    //orders
    async function addOrder() {
        const newOrder = {orderId:new Date().getTime(),items:[...cartItems]}
        const newOrderWhitId = await Api.addOrder(newOrder)
        setOrders(prevState=>[...prevState, newOrderWhitId])
        cartItems.map(item => deleteItemFromCart(item.id))
    }

    async function deleteOrder(id) {
        await Api.deleteOrder(id)
        setOrders(orders.filter(item => item.id !== id ))
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
            loading,
            orders,
            addOrder,
            deleteOrder
        }}>
            <AppRoutes/>
        </AppContext.Provider>
    );
}

export default App;

