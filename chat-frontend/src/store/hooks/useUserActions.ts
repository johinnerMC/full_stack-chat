import { useCallback } from "react";
import { fetchSinToken, fetchToken } from "../../helpers/fetch";
import {
	checkingCredentials,
	login,
	logout,
	verificationFailure,
} from "../authUser/slice";
import { LoginResponse } from "./interfaces";
import { useAppDispatch } from "./store";

interface UserLogin {
	email: string;
	password: string;
}

interface newUser extends UserLogin {
	name: string;
}

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const logInAuthentication = async (formData: UserLogin) => {
		dispatch(checkingCredentials());

		const { email, password } = formData;

		const resp: LoginResponse = await fetchSinToken({
			endpoint: "login",
			data: {
				email,
				password,
			},
			method: "POST",
		});

		if (!resp.ok) return dispatch(verificationFailure({ msg: resp.msg }));

		localStorage.setItem("token", resp.token);

		const { uid, name } = resp.usuario;
		dispatch(
			login({
				name,
				uid,
				email,
			}),
		);
	};

	const newUserAuthentication = async (formData: newUser) => {
		dispatch(checkingCredentials());

		const { email, password, name } = formData;

		const resp: LoginResponse = await fetchSinToken({
			endpoint: "login/new",
			data: {
				email,
				password,
				name,
			},
			method: "POST",
		});

		if (!resp.ok) return dispatch(verificationFailure({ msg: resp.msg }));

		localStorage.setItem("token", resp.token);

		const { uid } = resp.usuario;
		dispatch(
			login({
				name,
				uid,
				email,
			}),
		);
	};

	const authenticationWithToken = useCallback(async () => {
		dispatch(checkingCredentials());

		const token = localStorage.getItem("token");

		if (!token) {
			return dispatch(logout());
		}

		const resp: LoginResponse = await fetchToken("login/renew");

		if (!resp.ok) return dispatch(verificationFailure({ msg: resp.msg }));

		const { uid, name, email } = resp.usuario;
		dispatch(
			login({
				name,
				uid,
				email,
			}),
		);
	}, []);

	const useLogout = () => {
		localStorage.removeItem("token");
		dispatch(logout());
	};

	return {
		logInAuthentication,
		newUserAuthentication,
		authenticationWithToken,
		useLogout,
	};
};
