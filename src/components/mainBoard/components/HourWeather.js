import React from 'react'
import {useSelector} from "react-redux";
import {getHours} from "../../dateTranslation";

export const HourWeather = () => {

    const weatherHour = useSelector(state => state.main.gettingDataWeather.hourly)
    const visible = useSelector(state => state.mainBoard.hourWeather.display)

    return (
        <>
            {
                weatherHour.slice(0, 12).map((item, idx) =>
                    <li key={idx} style={{display: visible}}>
                        <p>{getHours(new window.Date(item.dt * 1000))}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt={item.weather[0].description}
                            title={item.weather[0].description}
                        />
                        <div>
                            <p>{Math.round(item.temp)}°C</p>
                        </div>
                    </li>
                )
            }
        </>
    )
}