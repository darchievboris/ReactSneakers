import {ReactComponent as Cart} from './assets/cart.svg'
import {ReactComponent as User} from './assets/user.svg'
import {ReactComponent as Plus} from "./assets/plus.svg";
import './App.css';


function App() {
    return (<div className="wrapper">
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина  <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/></h2>
                <div className="items">
                    <div className="cartItem">
                        <img className="imgItem" src="/img/sneakers/1.jpg" alt="Sneakers"/>
                        <div>
                            <p className="descItem">Мужские Кроссовки Nike Air Max 270</p>
                            <b className="priceItem">12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul className="">
                        <li><span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenBtn">Оформить заказ <img src="/img/arror.svg" alt="arror"/></button>
                </div>

            </div>
        </div>

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
            <div className="title">
                <h1>Все кроссовки</h1>
                <div className="searchBlock">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>

            <div className="cards">
                <div className="card">

                    <img className="favorit" src="/img/heartLiked.svg" alt="liked"/>
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
