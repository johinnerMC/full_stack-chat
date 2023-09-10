import { useAppSelector } from "../store/hooks/store";
import { LastChats } from "./LastChats";

export const Searchbox = () => {
	const { users } = useAppSelector((state) => state.chat);
	const { uid } = useAppSelector((state) => state.user);
	return (
		/* caja de búsqeda */
		<div>
			{users
				.filter((user) => user.uid !== uid)
				.map((user) => (
					<LastChats key={user.uid} user={user} />
				))}
		</div>
	);
};
