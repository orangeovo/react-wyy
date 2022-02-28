import { SIDEBAR_FLAG } from "../constant"

const initState = false

export default function Sidebar(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case SIDEBAR_FLAG:
            return data
        default:
            return preState
    }
}