import React from 'react'
import style from "../../../assets/scss/components/mainBoard/detailsTodayPanel.module.scss";

export const Pressure = ({pressure}) => {
    return (
        <li>
            <p>Давление</p>
            <p>
                {Math.round(pressure / 1.333)}
                <span className={style.pressure}>мм рт. ст.</span>
            </p>
        </li>
    )
}