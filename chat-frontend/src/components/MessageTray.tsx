import { useAppSelector } from "../store/hooks/store";
import { MessageItem01 } from "./MessageItem01";
import { MessageItem02 } from "./MessageItem02";

export const MessageTray = () => {
	const { messages } = useAppSelector((state) => state.chat);
	const { uid } = useAppSelector((state) => state.user);

	return (
		<div id="message" className="py-6 px-20 h-3/4 overflow-auto">
			{messages.map((msg) =>
				msg.for === uid ? (
					<MessageItem01
						key={msg.createdAt}
						msgValue={msg.message}
						date={msg.createdAt}
					/>
				) : (
					<MessageItem02
						key={msg.createdAt}
						msgValue={msg.message}
						date={msg.createdAt}
					/>
				),
			)}
		</div>
	);
};
