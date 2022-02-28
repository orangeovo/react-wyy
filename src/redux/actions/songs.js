import { CHANGE_SONGS } from "../constant"

export const createdSongs = (songs) => ({ type: CHANGE_SONGS, data: songs })
