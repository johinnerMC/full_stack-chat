import React from "react";
import { User } from "../store/hooks/interfaces";
import user01 from "/avatar/user-01.jpg";

type props = {
	key: string;
	user: User;
};

export const Online: React.FC<props> = ({ user }) => {
	return (
		<div className="mr-4 text-center self-center">
			<div className="relative w-12 mb-2">
				<img alt="userImg" src={user01} className="rounded-full" />
				<div
					className={`absolute p-1 rounded-full bottom-0 right-0 border-2 border-gray-800 ${
						user.online ? "bg-green-300" : "bg-red-300"
					}`}
				/>
			</div>
			<small>{user.name}</small>
		</div>
	);
};
