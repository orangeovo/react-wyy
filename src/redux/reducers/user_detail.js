import { USER_DETAILS } from "../constant"

const initState = null

export default function UsersDetails(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case USER_DETAILS:
            return data
        default:
            return preState
    }
}