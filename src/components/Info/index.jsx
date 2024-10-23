import React from 'react';
import cl from './Info.module.scss'
import {INFO_DATA} from "../../INFO_DATA";
import MyButton from "../UI/Button/MyButton";
import {useNavigate} from "react-router-dom";

const Info = ({type,page=true}) => {
    const navigate = useNavigate()
    const arrInfo = INFO_DATA.filter(item => item.type === type)

    const imgUrl = arrInfo[0].data.img
    const title = arrInfo[0].data.title
    const desc = arrInfo[0].data.desc
    return (
        <div className={cl.info}>
            <img src={imgUrl} alt={title}/>
            <h2>{title}</h2>
            <p>{desc}</p>
            {page && <MyButton style={{width:"245px"}} onClick={()=>navigate('/')}> Вернутся назад </MyButton>}
        </div>
    );
};

export default Info;

