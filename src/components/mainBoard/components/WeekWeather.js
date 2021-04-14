import React from 'react'
import {useSelector} from "react-redux";
import {getDate} from "../../dateTranslation";

export const WeekWeather = () => {

    const weekWeather = useSelector(state => state.main.gettingDataWeather.daily)
    const visible = useSelector(state => state.mainBoard.weekWeather.display)

    return (
        <>
            {
                weekWeather.map((item, idx) =>
                    <li key={idx} style={{display: visible}}>
                        <p>{getDate(new window.Date(item.dt * 1000))}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt={item.weather[0].description}
                            title={item.weather[0].description}
                        />
                        <div>
                            <p>{Math.round(item.temp.day)}°C</p>
                            <p>{Math.round(item.temp.night)}°C</p>
                        </div>
                    </li>
                )
            }
        </>
    )
}