import { createSlice } from "@reduxjs/toolkit";

export const customerInfoSlice = createSlice({
    name: "customerInfo",
    initialState: {
        customerInfo: {
            tripId: "655a3e28ac5dd261f4919f82",
            name: "Jon Doe",
            age: 20,
            email: "jon.doe@random.com",
            phoneNo: "1234567890",
            address: "Country, Earth",
            gender: "Male",
            seatNo: "E-31",
            timeOfBooking: 1673980200000,
            transactionId: "AXSSSS123122SKA1",
        }
    },
    reducers: {
        setCustomerInfo: (state, action) => {
            state.customerInfo = action.payload
        },


    }
})

export const { setCustomerInfo } = customerInfoSlice.actions
export default customerInfoSlice.reducer