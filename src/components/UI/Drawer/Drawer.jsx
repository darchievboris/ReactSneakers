import React, {useContext} from 'react';
import cl from './Drawer.module.scss'
import MyButton from "../Button/MyButton";

const Drawer = ({toggleDrawer, setToggleDrawer, children}) => {
    const closeDrawer = () => {
        setToggleDrawer(prevState => !prevState)
    }

    const extOverlay = toggleDrawer && cl.overlayVisible
    const overlay = [cl.overlay,extOverlay].join(" ")

    return (
        <div className={overlay} onClick={closeDrawer}>
            <div className={cl.drawer} onClick={e => e.stopPropagation()}>
                <h2>
                    Корзина
                    <MyButton type="remove" onClick={closeDrawer}/>
                </h2>
                {children}
            </div>
        </div>
    );
};

export default Drawer;
