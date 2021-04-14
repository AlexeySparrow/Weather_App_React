import React from 'react'
import style from '../../assets/scss/components/leftPanel/date.module.scss'
import {Location} from "../../assets/image/svg/Location";
import {shallowEqual, useSelector} from "react-redux";
import {getDate} from "../dateTranslation";

export const Date = ({date, feels}) => {

    const receivedCity = useSelector(state => state.main.receivedCity[0].address.city, shallowEqual)

    return (
        <div className={style.container}>
            <p>Ощущается как {Math.round(feels)} °C</p>
            <div className={style.dataAndCity}>
                <div>
                    <p>Сегодня</p>
                    <p>{getDate(new window.Date(date * 1000))}</p>
                </div>
                <div>
                    <Location/>
                    <p>{receivedCity}</p>
                </div>
            </div>
        </div>
    )
}