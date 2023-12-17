import { createSlice } from "@reduxjs/toolkit";

export const tripSlice = createSlice({
    name: "trips",
    initialState: {
        tripList: null,
        locationsListFrom: [],
        locationsListTo: [],
        currentTrip: null,
        totalSeatsBooked: 0,
        seatNames: [],
    },
    reducers: {
        setTripList: (state, action) => {
            state.tripList = action.payload
        },
        setLocationsListFrom: (state, action) => {
            state.locationsListFrom = action.payload
        },
        setLocationsListTo: (state, action) => {
            state.locationsListTo = action.payload
        },
        setCurrentTrip: (state, action) => {
            state.currentTrip = action.payload
        },
        setTotalSeatsBooked: (state, action) => {
            state.totalSeatsBooked = action.payload
        },
        setSeatNames: (state, action) => {
            state.seatNames = action.payload
        }
    }
})

export const { setTripList, setLocationsListFrom, setLocationsListTo, setCurrentTrip, setTotalSeatsBooked, setSeatNames } = tripSlice.actions
export default tripSlice.reducer