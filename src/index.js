import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import './assets/scss/_fonts.scss'
import './assets/scss/_zeroStyle.scss'
import './assets/scss/components/main.scss'
import {Provider} from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
