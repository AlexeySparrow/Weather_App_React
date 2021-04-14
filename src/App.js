import React from 'react'
import {LeftPanel} from "./components/LeftPanel"
import {MainBoard} from "./components/MainBoard"
import style from './assets/scss/components/app.module.scss'
import {shallowEqual, useSelector} from "react-redux"
import {Loading} from "./components/Loading"
import {Api} from "./store/API/api";

export const App = () => {

    const darkTheme = useSelector(state => state.leftPanel.darkTheme, shallowEqual)
    const dataWeather = useSelector(state => state.main.gettingDataWeather, shallowEqual)

    Api()

    if (!dataWeather) {
        return (
            <div className={style.wrapper}>
                <Loading height={'100vh'}/>
            </div>
        )
    } else {
        return (
            <div className={`${style.wrapper} ${style[darkTheme]}`}>
                <LeftPanel/>
                <MainBoard/>
            </div>
        );
    }
}