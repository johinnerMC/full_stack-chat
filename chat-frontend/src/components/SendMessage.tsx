import React, { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContex";
import { useAppSelector } from "../store/hooks/store";

export const SendMessage = () => {
	const [message, setMessage] = useState("");
    const { socket } = useContext( SocketContext );
    const { uid } = useAppSelector(state => state.user)
    const { activeChat } = useAppSelector(state => state.chat)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			if (message.length === 0) return;
			
			setMessage("");

            socket.emit('personal-message', {
                of: uid,
                for: activeChat,
                message
            })
		}
	};

	return (
		<div className="flex py-6 px-20 border-t">
			<div className="w-4/5">
				<input
					type="text"
					className="rounded-sm px-4 py-2 focus:outline-none bg-gray-100 w-full"
					placeholder="Escribe tu mensaje..."
					value={message}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
			</div>
			<div className="w-1/5 flex justify-end">
				{/* <a href="" className="bg-blue-500 text-white rounded px-4 py-2">Enviar</a> */}
			</div>
		</div>
	);
};
