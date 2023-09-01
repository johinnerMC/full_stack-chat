import { useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import logoGoogle from "/google.svg";

export const LoginPage = () => {
	const [showError, setShowError] = useState<string>("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const remembe = formData.get("remembe") as string;

		if (!email || !password) {
			return setShowError("Debe ingregar un correo electrónico y contraseña");
		}

		console.log({ email, password, remembe });
		form.reset();
		setShowError("");
	};

	return (
		<AuthLayout>
			<form className="mt-8" onSubmit={handleSubmit}>
				<div className="flex flex-col">
					<label className="text-lg font-medium">Correo electrónico</label>
					<input
						name="email"
						className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
						placeholder="Introduce tu correo electronico"
					/>
				</div>
				<div className="flex flex-col mt-4">
					<label className="text-lg font-medium">Contraseña</label>
					<input
						name="password"
						className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
						placeholder="Introduce tu contraseña"
						type={"password"}
					/>
				</div>

				{showError && <p className=" text-red-500">{showError}</p>}

				<div className="mt-8 flex justify-between items-center">
					<div>
						<input name="remembe" type="checkbox" id="remembe" />
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
						Iniciar sesión
					</button>
					<button
						type="button"
						className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 "
					>
						<img src={logoGoogle} alt="logo google" />
						Inicia sesión con Google
					</button>
				</div>
				<div className="mt-8 flex justify-center items-center">
					<p className="font-medium text-base">¿No tienes una cuenta?</p>
					<button
						type="button"
						className="ml-2 font-medium text-base text-violet-500"
					>
						{/*  <Link to="/auth/register"> 
            Inscribirse
          </Link>   */}
					</button>
				</div>
			</form>
		</AuthLayout>
	);
};
