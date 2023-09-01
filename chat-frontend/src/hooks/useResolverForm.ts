import { Resolver, useForm } from "react-hook-form";

type FormValues = {
	userName: string;
	email: string;
	password: string;
	remembe: boolean;
};

const REG =
	/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: values.userName && values.email ? values : {},
		errors: !values.userName
			? {
					userName: {
						type: "required",
						message: "Ingrese un nombre de usuario.",
					},
			  }
			: values.userName.length < 8
			? {
					userName: {
						type: "minLength",
						message: "Nombre de usuario debe tener minimo 8 caracteres.",
					},
			  }
			: !values.email
			? {
					email: {
						type: "required",
						message: "Ingrese un correo.",
					},
			  }
			: !REG.test(values.email)
			? {
					email: {
						type: "pattern",
						message: "Ingrese un correo valido.",
					},
			  }
			: !values.password
			? {
					password: {
						type: "required",
						message: "Ingrese una contraseña.",
					},
			  }
			: values.password.length < 6
			? {
					password: {
						type: "minLength",
						message: "La contraseña debe tener minino 6 caracteres.",
					},
			  }
			: {},
	};
};

export const useResolverForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ resolver });

	return {
		register,
		handleSubmit,
		errors,
	};
};
