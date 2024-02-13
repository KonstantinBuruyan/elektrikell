import { createSlice } from "@reduxjs/toolkit";

const initialShowSideBarState = {
    showSideBar: false,

}

export const sideBarSlice = createSlice({
    name: "sideBar",
    initialState: initialShowSideBarState,
    reducers: {
        setShowSideBar: (state, action) => {
            state.showSideBar = action.payload;
        },
    }
});

export const { setShowSideBar } = sideBarSlice.actions;