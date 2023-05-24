import { createSlice } from "@reduxjs/toolkit"

export const dataSlice = createSlice({
    name:"data",
    initialState:{value: {item: []}},
    reducers: {
        getAllData:(state,action) => {
            state.value = action.payload
        }
    }
})

export const {getAllData} = dataSlice.actions
export default dataSlice.reducer