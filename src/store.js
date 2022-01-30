import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./features/modeSlice";
import dataReducer from "./features/dataSlice"

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        data: dataReducer
    }
})