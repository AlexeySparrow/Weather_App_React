import React, {useCallback} from 'react'
import style from '../../assets/scss/components/leftPanel/searchPopup.module.scss'
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import {setOpenPopup} from "../../store/redusers/leftPanelReducer"
import {CloseIcon} from "../../assets/image/svg/CloseIcon"
import {SearchPanel} from "./components/SearchPanel";

export const SearchPopup = () => {

    const openPopup = useSelector(state => state.leftPanel.openPopup, shallowEqual)
    const darkTheme = useSelector(state => state.leftPanel.darkTheme, shallowEqual)
    const error = useSelector(state => state.leftPanel.errorCity, shallowEqual)

    const dispatch = useDispatch()
    const clickPopupClose = useCallback(() => dispatch(setOpenPopup('')), [dispatch])

    return (
        <div className={`${style.container} ${style[openPopup]} ${style[darkTheme]}`}>
            <button className={style.btnExit} onClick={clickPopupClose}>
                <CloseIcon/>
            </button>
            <SearchPanel/>
            <p style={{display: error}}>Упс! Город не найден, попробуйте другой</p>
        </div>
    )
}