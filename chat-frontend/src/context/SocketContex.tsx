import { createContext, useEffect } from "react";
import { scrollToBottomAnimated } from "../helpers/scrollToBottom";
import { useSocket } from "../hooks/useSocket";
import { useAppSelector } from "../store/hooks/store";
import { useChatActions } from "../store/hooks/useChatActions";
import { Message } from "./interfaces";

type Props = {
	children: JSX.Element | JSX.Element[];
};

export const SocketContext = createContext({});

export const SocketProvider = ({ children }: Props) => {
	const { socket, online, conectarSocket, desconectarSocket } = useSocket(
		"http://localhost:8080",
	);

	const { status } = useAppSelector((state) => state.user);

	const { sendNewMessage } = useChatActions();

	const { loadUsers } = useChatActions();

	useEffect(() => {
		if (status === "authenticated") {
			conectarSocket();
		} else if (status === "not-authenticated") {
			desconectarSocket();
		}
	}, [status]);

	useEffect(() => {
		socket?.on("users-list", (usuarios) => {
			loadUsers(usuarios);
		});
	}, [socket]);

	useEffect(() => {
		socket?.on("personal-message", (msgReceived: Message) => {
			sendNewMessage({
				of: msgReceived.of,
				for: msgReceived.for,
				message: msgReceived.message,
				createdAt: msgReceived.createdAt,
			});

			scrollToBottomAnimated("message");
		});
	}, [socket]);

	return (
		<SocketContext.Provider value={{ socket, online }}>
			{children}
		</SocketContext.Provider>
	);
};
