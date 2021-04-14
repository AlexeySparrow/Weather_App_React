import React from 'react'
import style from "../../../assets/scss/components/mainBoard/detailsTodayPanel.module.scss";
import windIndicator from "../../../assets/image/windIndicator.png";
import {WindDirections} from "./WindDirections";

export const Wind = ({speed, deg}) => {
    return (
        <li>
            <p>Скорость ветра</p>
            <p>
                {Math.round(speed)}
                <span>м/с</span>
            </p>
            <p className={style.windIndicator}>
                <img src={windIndicator} alt="windIndicator" style={{transform: `rotate(${deg}deg)`}}/>
                <WindDirections deg={deg}/>
            </p>
        </li>
    )
}