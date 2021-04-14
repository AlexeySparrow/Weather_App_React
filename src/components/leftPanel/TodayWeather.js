import React from 'react'
import style from '../../assets/scss/components/leftPanel/todayWeather.module.scss'
import {shallowEqual, useSelector} from "react-redux";

export const TodayWeather = ({temp, weather}) => {

    const darkTheme = useSelector(state => state.leftPanel.darkTheme, shallowEqual)

    let icon = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`

    return (
        <div className={`${style.container}  ${style[darkTheme]}`}>
            <img src={icon} alt={weather.description}/>
            <p>
                {Math.round(temp)} <span>°C</span>
            </p>
            <p>{weather.description}</p>
        </div>
    )
}