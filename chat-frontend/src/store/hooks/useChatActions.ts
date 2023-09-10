import { fetchToken } from "../../helpers/fetch";
import {
	activeChat,
	chatUsers,
	cleanChat,
	getMessages,
	newMessages,
} from "../chat/slice";
import { User } from "./interfaces";

import { useAppDispatch } from "./store";

type Msg = {
	of: string;
	for: string;
	message: string;
	createdAt: Date;
};

export const useChatActions = () => {
	const dispatch = useAppDispatch();

	const loadUsers = async (users: User[]) => {
		dispatch(
			chatUsers({
				users,
			}),
		);
	};

	const activateChat = (uid: string) => {
		dispatch(
			activeChat({
				activeChat: uid,
				messages: [],
			}),
		);
	};

	const sendNewMessage = (msg: Msg) => {
		dispatch(
			newMessages({
				messages: msg,
			}),
		);
	};

	const uploadMessages = async (uid: string) => {
		const resp = await fetchToken(`messaje/${uid}`);
		dispatch(getMessages(resp.messaje));
	};

	const resetChatStatus = async () => {
		dispatch(cleanChat());
	};

	return {
		loadUsers,
		activateChat,
		sendNewMessage,
		uploadMessages,
		resetChatStatus
	};
};
