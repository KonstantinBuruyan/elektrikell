import { createSlice } from "@reduxjs/toolkit";

const initialBestUntilState = {
    bestUntill: 0,

}

export const bestUntilSlice = createSlice({
    name: "bestUntill",
    initialState: initialBestUntilState,
    reducers: {
        setBestUntil: (state, action) => {
            state.bestUntill = action.payload;
        },
    }
});

export const { setBestUntil } = bestUntilSlice.actions;