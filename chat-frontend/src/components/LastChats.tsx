import React from "react";
import { scrollToBottom } from "../helpers/scrollToBottom";
import { User } from "../store/hooks/interfaces";
import { useAppSelector } from "../store/hooks/store";
import { useChatActions } from "../store/hooks/useChatActions";
import user02 from "/avatar/user-02.jpg";

type props = {
	key: string;
	user: User;
};

export const LastChats: React.FC<props> = ({ user }) => {
	const { activateChat, uploadMessages } = useChatActions();
	const { activeChat } = useAppSelector((state) => state.chat);

	const onClick = () => {
		if (activeChat !== user.uid) {
			activateChat(user.uid);

			uploadMessages(user.uid);

			scrollToBottom("message");
		}
	};

	return (
		// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={onClick}
			className="flex bg-gray-100 mb-4 p-4 rounded active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 cursor-pointer"
		>
			<img
				alt="userImg"
				src={user02}
				className="self-start rounded-full w-12 mr-4"
			/>
			<div className="w-full overflow-hidden">
				<div className="flex mb-1">
					<p className="font-medium flex-grow">{user.name}</p>
					<small className="text-gray-500">09:55 am</small>
				</div>
				<small className="overflow-ellipsis overflow-hidden block whitespace-nowrap text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
					dapibus a erat ac facilisis. Quisque in fringilla lorem.
				</small>
			</div>
		</div>
	);
};
