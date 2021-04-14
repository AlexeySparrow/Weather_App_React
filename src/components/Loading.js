import React from 'react'
import style from '../assets/scss/components/loading.module.scss'

export const Loading = ({height}) => {
    return (
        <div className={style.container} style={{height: height}}>
            <div className={style.lds_ellipsis}>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    )
}