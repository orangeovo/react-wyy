import { SEARCH_HISTORY, INIT_CLEAR } from "../constant"

const initState = ["李荣浩", "宋东野", "陈粒", "哎呀"]

export default function Search(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case SEARCH_HISTORY:
            return [data, ...preState]
        case INIT_CLEAR:
            return []
        default:
            return preState
    }
}