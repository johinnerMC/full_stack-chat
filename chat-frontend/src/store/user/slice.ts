import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE: User = {
	status: "not-authenticated", //'checking' 'not-authenticated','authenticated'
	uid: "",
	name: "",
	email: "",
	msg: "",
};

interface User {
	status: string;
	uid: string;
	name: string;
	email: string;
	msg: string;
}

export const userSlice = createSlice({
	name: "user",
	initialState: DEFAULT_STATE,
	reducers: {},
});

export default userSlice.reducer;

//export const { } = usersSlice.actions;
