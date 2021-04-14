import React, {useRef} from 'react'
import style from '../../assets/scss/components/mainBoard/weekAndHoursWeatherPanel.module.scss'
import {ArrowPrevAndNext} from "../../assets/image/svg/ArrowPrevAndNext";
import {shallowEqual, useSelector} from "react-redux";
import {WeekWeather} from "./components/WeekWeather";
import {HourWeather} from "./components/HourWeather";
import {TitleTabs} from "./components/TitleTabs";

export const WeekAndHoursWeatherPanel = () => {

    const darkTheme = useSelector(state => state.leftPanel.darkTheme, shallowEqual)

    const sliderWeather = useRef(null)

    return (
        <div className={`${style.container} ${style[darkTheme]}`}>
            <TitleTabs />
            <div className={style.cards}>
                <button onClick={() => sliderWeather.current.scrollLeft -= 130}>
                    <ArrowPrevAndNext/>
                </button>
                <button onClick={() => sliderWeather.current.scrollLeft += 130}>
                    <ArrowPrevAndNext/>
                </button>
                <ul ref={sliderWeather}>
                    <WeekWeather/>
                    <HourWeather/>
                </ul>
            </div>
        </div>
    )
}