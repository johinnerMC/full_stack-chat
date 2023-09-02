import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE: AuthUser & AuthFailed & status = {
	status: "not-authenticated",
	uid: "",
	name: "",
	email: "",
	msg: "",
};

type status = {
	status: "not-authenticated" | "checking" | "authenticated";
};

interface AuthUser {
	uid: string;
	name: string;
	email: string;
}
type AuthFailed = {
	msg: string | undefined;
};

export const userSlice = createSlice({
	name: "user",
	initialState: DEFAULT_STATE,
	reducers: {
		login: (state, action: PayloadAction<AuthUser>) => {
			state.status = "authenticated";
			state.uid = action.payload.uid;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.msg = "";
		},
		logout: (state) => {
			state.status = "not-authenticated";
			state.uid = "";
			state.name = "";
			state.email = "";
			state.msg = "";
		},
		checkingCredentials: (state) => {
			state.status = "checking";
		},
		verificationFailure: (state, action: PayloadAction<AuthFailed>) => {
			state.status = "not-authenticated";
			state.msg = action.payload.msg;
		},
	},
});

export default userSlice.reducer;

export const { login, logout, checkingCredentials, verificationFailure } =
	userSlice.actions;
