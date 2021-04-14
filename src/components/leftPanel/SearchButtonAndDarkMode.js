import React, {useCallback} from 'react'
import style from '../../assets/scss/components/leftPanel/searchButtonAndDarkMode.module.scss'
import {useDispatch} from "react-redux";
import {setDarkTheme, setOpenPopup} from "../../store/redusers/leftPanelReducer";

export const SearchButtonAndDarkMode = () => {

    const dispatch = useDispatch()
    // open popup - left panel search
    const clickPopupOpen = useCallback(() => dispatch(setOpenPopup('openPopup')), [dispatch])
    // dark theme on/off
    const onDark = useCallback(() => dispatch(setDarkTheme('darkTheme')), [dispatch])
    const offDark = useCallback(() => dispatch(setDarkTheme('')), [dispatch])

    const toggleDarkTheme = (event) => {
        if(event.target.checked) onDark()
        if(!event.target.checked) offDark()
    }

    return (
        <div className={style.container}>
            <button onClick={clickPopupOpen}>Поиск города</button>
            <div className={style.toggleDarkMode}>
                <input type="checkbox" id="checkbox_btn" onChange={toggleDarkTheme}/>
                <label htmlFor="checkbox_btn"/>
            </div>
        </div>
    )
}