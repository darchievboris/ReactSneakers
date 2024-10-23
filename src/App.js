import AppRoutes from "./RouterDom/AppRoutes";
import {AppContext} from "./context/AppContext";
import {useEffect, useState} from "react";
import {useFetching} from "./hooks/useFetching";
import {TEST_DATA} from "./TEST_DATA";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([])
    const [orders, setOrders] = useState([]);

    const [fetching, loading, error] = useFetching(async () => {
        setItems(TEST_DATA)
    })


    useEffect(() => {
        fetching()
    }, []);

    //carts
    async function deleteItemFromCart(id) {
        setCartItems(prevState => prevState.filter(item => item.id !== id))
    }

    async function addItemToCart(item) {
        setCartItems([...cartItems, item])
    }

    //favorites
    async function addFavorite(item) {
        setFavorites([...favorites, item])
    }

    async function deleteFavorite(id) {
        setFavorites(favorites.filter(favorite => favorite.id !== id))
    }

    //orders
    async function addOrder() {
        const newOrder = {id:new Date().getTime(),orderId:new Date().getTime(),items:[...cartItems]}
        setOrders(prevState=>[...prevState, newOrder])
        setCartItems([])
    }

    async function deleteOrder(id) {
        setOrders(orders.filter(item => item.id !== id ))
    }

    return (
        <AppContext.Provider value={{
            items,
            cartItems,
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

