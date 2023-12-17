import { createSlice } from "@reduxjs/toolkit";
const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const busSlice = createSlice({
    name: "bus",
    initialState: {
        fromLoc: "Bengaluru",
        toLoc: "Hyderabad",
        dateInput: getCurrentDate(),
        date: new Date(getCurrentDate()).getTime(),
        modal: false,
        cardIndex: -1,
        ticketModal: false
    },
    reducers: {
        setFromLoc: (state, action) => {
            state.fromLoc = action.payload
        },
        setToLoc: (state, action) => {
            state.toLoc = action.payload
        },
      setDateInput: (state, action) => {
            state.dateInput = action.payload
        },
        setDate: (state, action) => {
            state.date = action.payload
        },
        setModal: (state, action) => {
            state.modal = action.payload
        },
        setCardIndex: (state, action) => {
            state.cardIndex = action.payload
        },
        setTicketModal: (state, action) => {
            state.ticketModal = action.payload
        }

    },
})

export const { setFromLoc, setToLoc, setDateInput,setModal,setCardIndex,setTicketModal,setDate } = busSlice.actions
export default busSlice.reducer