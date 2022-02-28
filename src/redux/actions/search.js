import { SEARCH_HISTORY, INIT_CLEAR } from "../constant"

export const createdSearch = (data) => ({ type: SEARCH_HISTORY, data: data })

export const searchclear = (data) => ({ type: INIT_CLEAR, data: data })
