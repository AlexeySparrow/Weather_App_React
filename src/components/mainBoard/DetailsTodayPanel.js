import React from 'react'
import style from '../../assets/scss/components/mainBoard/detailsTodayPanel.module.scss'
import {shallowEqual, useSelector} from "react-redux";
import {Pressure} from "./components/Pressure";
import {Visibility} from "./components/Visibility";
import {Humidity} from "./components/Humidity";
import {Wind} from "./components/Wind";

export const DetailsTodayPanel = () => {

    const darkTheme = useSelector(state => state.leftPanel.darkTheme, shallowEqual)
    const weatherData = useSelector(state => state.main.gettingDataWeather.current)

    return (
        <div className={`${style.container} ${style[darkTheme]}`}>
            <h1>Подробно на сегодня</h1>
            <ul>
                <Wind speed={weatherData.wind_speed} deg={weatherData.wind_deg}/>
                <Humidity humidity={weatherData.humidity}/>
                <Visibility visibility={weatherData.visibility}/>
                <Pressure pressure={weatherData.pressure}/>
            </ul>
        </div>
    )
}