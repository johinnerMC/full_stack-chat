import { fetchSinToken } from "../../helpers/fetch";
import {
	checkingCredentials,
	login,
	verificationFailure,
} from "../authUser/slice";
import { LoginResponse } from "./interfaces";
import { useAppDispatch } from "./store";

type UserLogin = {
	email: string;
	password: string;
};

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

		if (!resp.ok) {
			return dispatch(
				verificationFailure({
					msg: resp.msg,
				}),
			);
		}

		localStorage.setItem("token", resp.token);

		const { uid, name } = resp.usuario;
		console.log(uid, name);
		dispatch(
			login({
				name,
				uid,
				email,
			}),
		);
	};

	return { logInAuthentication };
};
