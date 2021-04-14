import React, {useCallback} from 'react'
import searchIcon from "../../../assets/image/search.png";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../../store/redusers/leftPanelReducer";
import {setLookingCity} from "../../../store/redusers/mainReducer";

export const SearchPanel = () => {

    const searchValue = useSelector(state => state.leftPanel.searchValue, shallowEqual)

    const dispatch = useDispatch()
    const getValueSearch = useCallback((event) => dispatch(setSearchValue(event.target.value)), [dispatch])
    const clearValue = useCallback(() => dispatch(setSearchValue('')), [dispatch])
    const getLookingCity = useCallback((value) => dispatch(setLookingCity(value)), [dispatch])

    const getCityClick = () => {
        if(searchValue) {
            getLookingCity(searchValue)
            clearValue()
        }
    }

    const getCityPress = (event) => {
        if(event.key === 'Enter'){
            getLookingCity(searchValue)
            clearValue()
        }
    }

    return (
        <div>
                <span>
                    <input
                        type="text"
                        placeholder='Введите город'
                        value={searchValue}
                        onChange={getValueSearch}
                        onKeyPress={getCityPress}
                    />
                    <img src={searchIcon} alt="#"/>
                </span>
            <button onClick={getCityClick}>Найти</button>
        </div>
    )
}