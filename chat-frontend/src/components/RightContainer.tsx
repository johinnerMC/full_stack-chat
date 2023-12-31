import { OnHold } from ".";
import { useAppSelector } from "../store/hooks/store";
import { MessageTray } from "./MessageTray";
import { SendMessage } from "./SendMessage";

import { SpeedDial } from "./SpeedDial";
import user02 from "/avatar/adventurer-1.jpg";

export const RightContainer = () => {
	const { name } = useAppSelector((state) => state.user);
	const { activeChat } = useAppSelector((state) => state.chat);
	return (
		<>
			{/*    descripcion superior   */}
			<div className="py-6 px-20 border-b">
				<div className="flex relative">
					<div className="flex flex-grow">
						<div className="relative mr-4">
							<img alt="userImg" src={user02} className="rounded-full w-12" />
							<div
								className={`absolute p-1 rounded-full bottom-0 right-0 border-2 border-gray-800 ${
									true ? "bg-green-300" : "bg-red-300"
								}`}
							/>
						</div>
						<div>
							<p className="font-medium">Patrisia</p>
							<small className="text-gray-500">Online</small>
						</div>
					</div>

					<SpeedDial />
				</div>
			</div>

			{!activeChat ? (
				<OnHold />
			) : (
				<>
					<MessageTray />

					<SendMessage />
				</>
			)}
		</>
	);
};
