import { ReactNode } from "react";
import { useAppSelector } from "../../store/hooks/store";

type Props = {
	children?: ReactNode;
	// any props that come into the component
};

export const AuthLayout = ({ children }: Props) => {
	const { msg } = useAppSelector((state) => state.user);
	return (
		<div className="flex w-full h-screen">
			<div className="w-full flex items-center justify-center lg:w-1/2">
				<div className=" w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
					<h1 className="text-5xl font-semibold">Bienvenido de nuevo</h1>
					{msg ? (
						<div
							className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
							role="alert"
						>
							<strong className="font-bold">Error! </strong>
							<span className="block sm:inline">{msg}</span>
							<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
								<svg
									className="fill-current h-6 w-6 text-red-500"
									role="button"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<title>Close</title>
									<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
								</svg>
							</span>
						</div>
					) : (
						<p className="font-medium text-lg text-gray-500 mt-4">
							¡Bienvenido de nuevo! Por favor ingrese sus datos.
						</p>
					)}

					{children}
				</div>
			</div>
			<div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
				<div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-bounce" />
				<div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
			</div>
		</div>
	);
};
