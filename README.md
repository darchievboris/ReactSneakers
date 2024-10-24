# React sneakers

## Описание

React-sneakers — интернет-магазин кроссовок. Этот проект я написал для того, чтобы закрепить свои знания по React и попрактиковаться с React-router-dom.

## Функционал

- вся информация о товарах (ссылки на фото, название, цена) подгружаются с сервера,
- закладки, оформленные заказы, товары в корзине также сохраняются на сервере,
- на сайте присутствует корзина, в которой можно увидеть итоговую сумму (цена товаров + налог 5%), из нее также можно удалять товары
- покупка кроссовок,
- при оформлении заказа (его номер сохраняется), корзина очищается и он добавляется в соответствующий раздел,
- при удалении/добавлении товара в корзину обновляется соответствующая кнопка на карточке, общая сумма в корзине и в шапке сайта,
- при удалении всех закладок,заказов и товаров из корзины появляется сообщение с эмодзи
- поиск товаров по названию.

## Технологии

- React,
- React Router,
- React Skeleton,
- React CSS Modules,
- Препроцессор css
- Хуки (useState, useEffect, useContext, useRef),
- использование кастомных хуков,
- работа с Json-Server,
- контроль версий в Git.

## Инструкция

Чтобы запустить проект, нужно сделать несколько простых шагов.

- Создайте папку и перейдите в неё:

```
cd <Имя-папки>
```

- Склонируйте этот репозиторий:

```
git clone https://github.com/darchievboris/ReactSneakers.git
```

- Установите все зависимости:

```
npm install
```

- Теперь можете запустить проект:

```
npm start 
```

## Системные требования

Для запуска потребуется Node.js версии 16.13.0.

## Ссылка на GitHub Pages

https://darchievboris.github.io/ReactSneakers