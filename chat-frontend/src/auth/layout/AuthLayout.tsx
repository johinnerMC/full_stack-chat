import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
	// any props that come into the component
}

export const AuthLayout = ({ children }: Props) => {
	return (
		<div className="flex w-full h-screen">
			<div className="w-full flex items-center justify-center lg:w-1/2">
				<div className=" w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
					<h1 className="text-5xl font-semibold">Bienvenido de nuevo</h1>
					<p className="font-medium text-lg text-gray-500 mt-4">
						¡Bienvenido de nuevo! Por favor ingrese sus datos.
					</p>

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
