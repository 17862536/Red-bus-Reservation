import { createSlice } from "@reduxjs/toolkit";

export const busSlice = createSlice({
    name: "bus",
    initialState: {
        fromLoc: "Bengaluru",
        toLoc: "Hyderabad",
        modal: false,
    },
    reducers: {
        setFromLoc: (state, action) => {
            state.fromLoc = action.payload
        },
        setToLoc: (state, action) => {
            state.toLoc = action.payload
        },
        setModal: (state, action) => {
            state.modal = action.payload
        }
    },
})

export const { setFromLoc, setToLoc, setModal } = busSlice.actions
export default busSlice.reducer