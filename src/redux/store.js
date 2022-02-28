
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import Songs from "./reducers/songs"
import Search from "./reducers/search"
import Sidebar from "./reducers/sidebar"
import Users from "./reducers/user"
import UsersDetails from "./reducers/user_detail"
import Songbar from './reducers/songbar'
import PlaySongs from "./reducers/Player_song"
import MusicSrc from "./reducers/music_src"

const allReducer = combineReducers({
    search: Search,
    songs: Songs,
    sidebar: Sidebar,
    user: Users,
    userdetails: UsersDetails,
    songbar: Songbar,
    playsongs: PlaySongs,
    musicsrc: MusicSrc
})


// export default createStore(allReducer, applyMiddleware)

const store = createStore(allReducer, composeWithDevTools())

export default store