import { createSlice } from "@reduxjs/toolkit";

const initialBestUntilState = {
    bestUntill: 0,

}

export const bestUntilSlice = createSlice({
    name: "bestUntil",
    initialState: initialBestUntilState,
    reducers: {
        setBestUntil: (state, action) => {
            state.bestUntil = action.payload;
        },
    }
});

export const { setBestUntil } = bestUntilSlice.actions;