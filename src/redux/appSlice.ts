import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { merge } from "lodash";
import { store } from "./store";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        userId: null,
        name: "",
        email: "",
        cf_email: "",
        phone: "",
        date: "",
        number_ticket: 0,
        message: ""
    } as AppSliceState,
    reducers: {
        updateAppData: (state, action: PayloadAction<Partial<AppSliceState>>) => {
            return merge(state, action.payload);
        }
    }
});

export const {updateAppData} = appSlice.actions;
export const appReducer = appSlice.reducer;
