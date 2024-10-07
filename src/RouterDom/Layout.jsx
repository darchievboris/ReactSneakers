import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import Drawer from "../components/Drawer/Drawer";

const layout = ({}) => {
    return (
        <div className="wrapper">
            <Drawer/>
            <Header/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
};

export default layout;
