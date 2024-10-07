import React from 'react';
import {Route, Routes} from "react-router-dom";
import Items from "../Pages/Items";
import Layout from "./Layout";
import Orders from "../Pages/Orders";
import Favorites from "../Pages/Favorites";
import NoPages from "../Pages/NoPages";

const AppRoutes = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Items/>}/>
                <Route path="favorites" element={<Favorites/>}/>
                <Route path="orders" element={<Orders/>}/>
                <Route path="*" element={<NoPages/>}/>
             </Route>
        </Routes>
    );
};

export default AppRoutes;
