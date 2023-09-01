import { MessageItem } from "./MessageItem";

export const MessageTray = () => {
	return (
		<div className="py-6 px-20 h-3/4 overflow-auto">
			<MessageItem />
		</div>
	);
};
