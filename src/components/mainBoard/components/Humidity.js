import React from 'react'
import style from "../../../assets/scss/components/mainBoard/detailsTodayPanel.module.scss";

export const Humidity = ({humidity}) => {
    return (
        <li>
            <p>Влажность</p>
            <p>
                {Math.round(humidity)}
                <span>%</span>
            </p>
            <div className={style.humidity}>
                <div>
                    <p>0%</p>
                    <p>50%</p>
                    <p>100%</p>
                </div>
                <div>
                    <span style={{width: `${humidity}%`}}/>
                </div>
            </div>
        </li>
    )
}