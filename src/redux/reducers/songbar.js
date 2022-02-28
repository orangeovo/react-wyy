import { BOFANGQI } from "../constant"

const initState = true

export default function Songbar(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case BOFANGQI:
            return data
        default:
            return preState
    }
}