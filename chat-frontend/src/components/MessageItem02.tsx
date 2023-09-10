import React from "react";
import user01 from "/avatar/user-01.jpg";

type props = {
	key: string;
	msgValue: string;
	date: Date;
};

import { hourMonth } from '../helpers/hourMonth';

export const MessageItem02: React.FC<props> = ({ msgValue, date }) => {
	return (
		<div className="flex flex-row-reverse mb-12">
			<img
				src={user01}
				alt="UserImg"
				className="self-end rounded-full w-10 mr-4"
			/>
			<div className="flex flex-col">
				<div className="bg-white  p-6 rounded-3xl rounded-br-none w-96 mb-2">
					<small className="inline-block mb-1">{msgValue}</small>
				</div>

				<small className="text-gray-500 self-end">{ hourMonth(date) }</small>
			</div>
		</div>
	);
};
