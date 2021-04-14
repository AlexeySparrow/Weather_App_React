import {useCallback, useEffect} from "react";
import {setGettingDataWeather, setReceivedCity} from "../redusers/mainReducer";
import {setErrorCity, setOpenPopup} from "../redusers/leftPanelReducer";
import * as axios from "axios";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

export const Api = () => {
    const lookingCity = useSelector(state => state.main.lookingCity, shallowEqual)
    const receivedCity = useSelector(state => state.main.receivedCity, shallowEqual)

    const dispatch = useDispatch()

    const getDataCity = useCallback((result) => dispatch((setReceivedCity(result))), [dispatch])
    const getDataWeather = useCallback((result) => dispatch(setGettingDataWeather(result)), [dispatch])
    const popupClose = useCallback(() => dispatch(setOpenPopup('')), [dispatch])
    const errorSearchCity = useCallback((result) => dispatch(setErrorCity(result)), [dispatch])

    /* getting data city */
    
    useEffect(() => {
        let searchCity = async () => {
            let response = await axios.get(`https://nominatim.openstreetmap.org/search.php?q=${lookingCity}&format=json&addressdetails=1&limit=1`)
            let result = response.data

            if (result.length) {
                getDataCity(result)
                errorSearchCity('none')
            }
            if (!result.length) {
                errorSearchCity('block')
            }
        }
        searchCity()
    }, [errorSearchCity, getDataCity, lookingCity])

    /* getting data weather */

    useEffect(() => {
        let weatherData = async (lat, lon) => {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=8798ed7c166e41925cf5dc9b18ccdb32&lang=ru&exclude=minutely&units=metric`)
            let result = response.data
            getDataWeather(result)
            popupClose()
        };
        if (receivedCity) weatherData(receivedCity[0].lat, receivedCity[0].lon)
    }, [getDataWeather, popupClose, receivedCity])
}