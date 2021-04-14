const WEEK_WEATHER = 'WEEK_WEATHER'
const HOUR_WEATHER = 'HOUR_WEATHER'

let initialState = {
    weekWeather: {
        display: 'flex',
        active: 'tabActive'
    },
    hourWeather: {
        display: 'none',
        active: ''
    }
}

export const mainBoardReducer = (state = initialState, action) => {

    switch (action.type) {
        case WEEK_WEATHER:
            return {
                ...state,
                weekWeather: {
                    display: action.weekWeather.display,
                    active: action.weekWeather.active
                }
            }
        case HOUR_WEATHER:
            return {
                ...state,
                hourWeather: {
                    display: action.hourWeather.display,
                    active: action.hourWeather.active
                }
            }
        default:
            return state;
    }
}

export const setWeekWeather = (weekWeather) => ({type: WEEK_WEATHER, weekWeather})
export const setHourWeather = (hourWeather) => ({type: HOUR_WEATHER, hourWeather})