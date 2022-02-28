import {atom} from "recoil"

export const playlistState = atom({
    key: "playlistState",
    default:null
})

export const playlistIdState = atom({
    key: "playlistIdState", //needs to be unique
    default: '0vvXsWCC9xrXsKd4FyS8kM',
})