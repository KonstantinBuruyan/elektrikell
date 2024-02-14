import { createSlice } from "@reduxjs/toolkit";

const initialDataLoadedState = {
    isDataLoaded: false,

}

export const dataLoadedSlice = createSlice({
    name: "dataLoaded",
    initialState: initialDataLoadedState,
    reducers: {
        setIsDataLoaded: (state, action) => {
            state.isDataLoaded = action.payload;
        },
    }
});

export const { setIsDataLoaded } = dataLoadedSlice.actions;