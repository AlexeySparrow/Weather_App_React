const OPEN_POPUP = 'OPEN_POPUP'
const SEARCH_VALUE = 'SEARCH_VALUE'
const DARK_THEME = 'DARK_THEME'
const ERROR_CITY = 'ERROR_CITY'

let initialState = {
    openPopup: '',
    darkTheme: '',
    searchValue: '',
    errorCity: 'none'
}

export const leftPanelReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_POPUP:
            return {
                ...state,
                openPopup: action.openPopup
            }
        case DARK_THEME:
            return {
                ...state,
                darkTheme: action.darkTheme
            }
        case SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.searchValue
            }
        case ERROR_CITY:
            return {
                ...state,
                errorCity: action.errorCity
            }
        default:
            return state;
    }
}

export const setOpenPopup = (openPopup) => ({type: OPEN_POPUP, openPopup})
export const setDarkTheme = (darkTheme) => ({type: DARK_THEME, darkTheme})
export const setSearchValue = (searchValue) => ({type: SEARCH_VALUE, searchValue})
export const setErrorCity = (errorCity) => ({type: ERROR_CITY, errorCity})