import { Link } from "react-router-dom";

import { useResolverForm } from "../../hooks/useResolverForm";
import { useUserActions } from "../../store/hooks/useUserActions";
import { AuthLayout } from "../layout/AuthLayout";
import logoGoogle from "/google.svg";

export const RegisterPage = () => {
	const { register, handleSubmit, errors } = useResolverForm();

	const { newUserAuthentication } = useUserActions();

	const onSubmit = handleSubmit((data) => {
		newUserAuthentication({
			name: data.userName,
			...data,
		});
	});

	return (
		<AuthLayout>
			<form className="mt-8" onSubmit={onSubmit}>
				<div className="flex flex-col">
					<label className="text-lg font-medium">Usuario</label>
					<input
						className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
						placeholder="Introduce su nombre de usuario"
						{...register("userName")}
					/>
					{errors?.userName && (
						<p className="text-red-500">{errors.userName.message}</p>
					)}
				</div>

				<div className="flex flex-col">
					<label className="text-lg font-medium">Correo electrónico</label>

					<input
						className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
						placeholder="Introduce tu correo electronico"
						{...register("email")}
					/>
					{errors?.email && (
						<p className="text-red-500">{errors.email.message}</p>
					)}
				</div>

				<div className="flex flex-col mt-4">
					<label className="text-lg font-medium">Contraseña</label>

					<input
						className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
						placeholder="Introduce tu contraseña"
						type={"password"}
						{...register("password")}
					/>
					{errors?.password && (
						<p className="text-red-500">{errors.password.message}</p>
					)}
				</div>

				<div className="mt-8 flex justify-between items-center">
					<div>
						<input type="checkbox" id="remembe" {...register("remembe")} />
						<label className="ml-2 font-medium text-base" htmlFor="remembe">
							Recuerda por 30 días
						</label>
					</div>
					<button
						type="button"
						className="font-medium text-base text-violet-500"
					>
						Has olvidado tu contraseña
					</button>
				</div>

				<div className="mt-8 flex flex-col gap-y-4">
					<button
						className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg"
						type="submit"
					>
						Registrase
					</button>
					<button
						type="button"
						className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 "
					>
						<img src={logoGoogle} alt="logo Google" />
						Registrate con Google
					</button>
				</div>
				<div className="mt-8 flex justify-center items-center">
					<p className="font-medium text-base">¿Ya tienes una cuenta?</p>
					<button
						type="button"
						className="ml-2 font-medium text-base text-violet-500"
					>
						<Link to="/auth/login">Acceder</Link>
					</button>
				</div>
			</form>
		</AuthLayout>
	);
};
