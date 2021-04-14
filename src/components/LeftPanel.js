import React from 'react'
import style from '../assets/scss/components/leftPanel.module.scss'
import {SearchButtonAndDarkMode} from "./leftPanel/SearchButtonAndDarkMode";
import {TodayWeather} from "./leftPanel/TodayWeather";
import {Date} from "./leftPanel/Date";
import {SearchPopup} from "./leftPanel/SearchPopup";
import {shallowEqual, useSelector} from "react-redux";

export const LeftPanel = () => {

    const darkTheme = useSelector(state => state.leftPanel.darkTheme, shallowEqual)
    const weatherData = useSelector(state => state.main.gettingDataWeather.current)

    return (
        <section className={`${style.container}  ${style[darkTheme]}`}>
            <SearchButtonAndDarkMode />
            <TodayWeather temp={weatherData.temp} weather={weatherData.weather[0]}/>
            <Date date={weatherData.dt} feels={weatherData.feels_like}/>
            <SearchPopup />
        </section>
    )
}