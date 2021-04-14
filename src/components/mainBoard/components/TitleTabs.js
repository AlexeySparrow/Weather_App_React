import React, {useCallback} from 'react'
import style from "../../../assets/scss/components/mainBoard/weekAndHoursWeatherPanel.module.scss";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {setHourWeather, setWeekWeather} from "../../../store/redusers/mainBoardReducer";

export const TitleTabs = () => {

    const weekActive = useSelector(state => state.mainBoard.weekWeather.active, shallowEqual)
    const hourActive = useSelector(state => state.mainBoard.hourWeather.active, shallowEqual)

    const dispatch = useDispatch()

    const week = useCallback((result) => dispatch((setWeekWeather(result))), [dispatch])
    const hour = useCallback((result) => dispatch((setHourWeather(result))), [dispatch])

    let clickWeek = () => {
        week({
            display: 'flex',
            active: 'tabActive'
        })
        hour({
            display: 'none',
            active: ''
        })
    }

    let hourClick = () => {
        week({
            display: 'none',
            active: ''
        })
        hour({
            display: 'flex',
            active: 'tabActive'
        })
    }

    return (
        <div className={style.title}>
            <h1>Прогноз</h1>
            <ul>
                <li className={style[weekActive]} onClick={clickWeek}>на неделю</li>
                <li className={style[hourActive]} onClick={hourClick}>почасовой</li>
            </ul>
        </div>
    )
}