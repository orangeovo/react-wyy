import { PLAYER_SONG } from "../constant"

const initState = ""

export default function PlaySongs(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case PLAYER_SONG:
            return data
        default:
            return preState
    }
}