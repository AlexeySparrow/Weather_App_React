const GETTING_DATA_CITY = 'GETTING_DATA_CITY'
const GETTING_DATA_WEATHER = 'GETTING_DATA_WEATHER'
const LOOKING_CITY = 'LOOKING_CITY'
const RECEIVED_URL_CITY = 'RECEIVED_URL_CITY'

let initialState = {
    gettingDataCity: '',
    gettingDataWeather: '',
    lookingCity: 'москва',
    receivedCity: ''
}

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case GETTING_DATA_CITY:
            return {
                ...state,
                gettingDataCity: action.gettingDataCity
            }
        case GETTING_DATA_WEATHER:
            return {
                ...state,
                gettingDataWeather: action.gettingDataWeather
            }
        case LOOKING_CITY:
            return {
                ...state,
                lookingCity: action.lookingCity
            }
        case RECEIVED_URL_CITY:
            return {
                ...state,
                receivedCity: action.receivedCity
            }
        default:
            return state;
    }
}

export const setGettingDataCity = (gettingDataCity) => ({type: GETTING_DATA_CITY, gettingDataCity})
export const setGettingDataWeather = (gettingDataWeather) => ({type: GETTING_DATA_WEATHER, gettingDataWeather})
export const setLookingCity = (lookingCity) => ({type: LOOKING_CITY, lookingCity})
export const setReceivedCity = (receivedCity) => ({type: RECEIVED_URL_CITY, receivedCity})