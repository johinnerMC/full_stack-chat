import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authUser/slice";
import chatReducer from "./chat/slice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		chat: chatReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
