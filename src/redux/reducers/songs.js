import { CHANGE_SONGS } from "../constant"

const initState = []

export default function Songs(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case CHANGE_SONGS:
            return [data]
        default:
            return preState
    }
}