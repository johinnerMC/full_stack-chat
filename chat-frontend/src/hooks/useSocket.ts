import { useCallback, useEffect, useState } from "react";
import * as io from "socket.io-client";

export const useSocket = (serverPath: string) => {
	const [socket, setSocket] = useState<io.Socket | null>(null);
	const [online, setOnline] = useState<boolean>(false);

	const conectarSocket = useCallback(() => {
		const token = localStorage.getItem("token");

		const socketTemp = io.connect(serverPath, {
			transports: ["websocket"],
			autoConnect: true,
			forceNew: true,
			query: {
				"x-token": token,
			},
		});
		setSocket(socketTemp);
	}, [serverPath]);

	const desconectarSocket = useCallback(() => {
		socket?.disconnect();
	}, [socket]);

	useEffect(() => {
		setOnline(socket?.connected ?? false);
	}, [socket]);

	useEffect(() => {
		socket?.on("connect", () => setOnline(true));
	}, [socket]);

	useEffect(() => {
		socket?.on("disconnect", () => setOnline(false));
	}, [socket]);

	return {
		socket,
		online,
		conectarSocket,
		desconectarSocket,
	};
};
