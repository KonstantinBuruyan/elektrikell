import { createSlice } from "@reduxjs/toolkit";

const initialErrorState = {
    errorMessage: null,

}

export const errorSlice = createSlice({
    name: "error",
    initialState: initialErrorState,
    reducers: {
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
    }
});

export const { setErrorMessage } = errorSlice.actions;