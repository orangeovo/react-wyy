import { USER_INFORMATION } from "../constant"

export const createduser = (information) => ({ type: USER_INFORMATION, data: information })
