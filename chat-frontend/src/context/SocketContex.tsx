import { createContext, useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import { useAppSelector } from "../store/hooks/store";

type Props = {
	children: JSX.Element | JSX.Element[];
};

export const SocketContext = createContext({});

export const SocketProvider = ({ children }: Props) => {
	const { socket, online, conectarSocket, desconectarSocket } = useSocket(
		"http://localhost:8080",
	);

	const { status } = useAppSelector((state) => state.user);

	useEffect(() => {
		if (status === "authenticated") {
			conectarSocket();
		} else if (status === "not-authenticated") {
			desconectarSocket();
		}
	}, [status]);

	return (
		<SocketContext.Provider value={{ socket, online }}>
			{children}
		</SocketContext.Provider>
	);
};
