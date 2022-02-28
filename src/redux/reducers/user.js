import { USER_INFORMATION } from "../constant"

const initState = null

export default function Users(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case USER_INFORMATION:
            return data
        default:
            return preState
    }
}