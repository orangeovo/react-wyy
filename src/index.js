import React from "react"
import ReactDOM from "react-dom"
import "./assets/css/common.less"
import "./assets/css/font.css"
import "./assets/css/iconfont.css"
import "./assets/iconfon2/iconfont.css"
import "./assets/csstest/iconfont.css"
import App from "./App"
import { createduser } from "./redux/actions/user"
import { Provider } from "react-redux"
import store from "./redux/store"

if (localStorage.getItem("user")) {
    store.dispatch(createduser(JSON.parse(localStorage.getItem("user"))))
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'
    ))