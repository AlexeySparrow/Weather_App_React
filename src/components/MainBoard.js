import React from 'react'
import style from '../assets/scss/components/mainBoard.module.scss'
import {WeekAndHoursWeatherPanel} from "./mainBoard/WeekAndHoursWeatherPanel";
import {DetailsTodayPanel} from "./mainBoard/DetailsTodayPanel";

export const MainBoard = () => {
    return (
        <section className={style.container}>
            <WeekAndHoursWeatherPanel/>
            <DetailsTodayPanel />
        </section>
    )
}