import { OnHold } from ".";
import { useAppSelector } from "../store/hooks/store";
import { MessageTray } from "./MessageTray";
import { SendMessage } from "./SendMessage";

import { SpeedDial } from "./SpeedDial";
import user02 from "/avatar/user-02.jpg";

export const RightContainer = () => {
	const { name } = useAppSelector((state) => state.user);
	return (
		<>
			{/*    descripcion superior   */}
			<div className="py-6 px-20 border-b">
				<div className="flex relative">
					<div className="flex flex-grow">
						<div className="relative mr-4">
							<img alt="userImg" src={user02} className="rounded-full w-12" />
							<div className="absolute bg-red-300 p-1 rounded-full bottom-0 right-0 border-2 border-gray-800" />
						</div>
						<div>
							<p className="font-medium">{name}</p>
							<small className="text-gray-500">Online</small>
						</div>
					</div>

					<SpeedDial />
				</div>
			</div>

			{false ? (
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
