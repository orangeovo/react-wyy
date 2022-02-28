import { MUSIC_SRC } from "../constant"

const initState = ""

export default function MusicSrc(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case MUSIC_SRC:
            return data
        default:
            return preState
    }
}