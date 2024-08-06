import {ReactComponent as Cart} from './assets/cart.svg'
import {ReactComponent as User} from './assets/user.svg'
import {ReactComponent as Plus} from "./assets/plus.svg";
import './App.css';


function App() {
    return (<div className="wrapper">
        <header>
            <div className="headerLeft">
                <img src="/img/logo.png" className="logo"/>
                <div className="headerInfo">
                    <h3>React Sneakers</h3>
                    <p>Магазин луших кроссовок</p>
                </div>
            </div>
            <ul className="headerRight">
                <li>
                    <Cart/>
                    <span>1200 руб.</span>
                </li>
                <li>
                    <User/>
                </li>
            </ul>
        </header>
        <div className="content">
            <h1>Все кроссовки</h1>
            <div className="cards">
                <div className="card">
                    <img src="/img/sneakers/1.jpg" alt="sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="cardBottom">
                        <div className="cardPrice">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <Plus/>
                        </button>

                    </div>
                </div>
                <div className="card">
                    <img src="/img/sneakers/1.jpg" alt="sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="cardBottom">
                        <div className="cardPrice">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <Plus/>
                        </button>

                    </div>
                </div>
                <div className="card">
                    <img src="/img/sneakers/1.jpg" alt="sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="cardBottom">
                        <div className="cardPrice">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <Plus/>
                        </button>

                    </div>
                </div>
                <div className="card">
                    <img src="/img/sneakers/1.jpg" alt="sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="cardBottom">
                        <div className="cardPrice">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <Plus/>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default App;
