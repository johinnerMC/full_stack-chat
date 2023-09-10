import { useAppSelector } from "../store/hooks/store";
import { Online } from "./Online";
import { Searchbox } from "./Searchbox";

export const Sidebar = () => {
	const { users } = useAppSelector((state) => state.chat);
	const { uid } = useAppSelector((state) => state.user);
	return (
		<div className="bg-white xl:w-3/12 lg:w-4/12 w-full p-6">
			<h3 className="text-2xl mb-8">Chat en línea</h3>

			<div className="flex overflow-auto w-full mb-8">
				{users
					.filter((user) => user.uid !== uid)
					.map((user) => (
						<Online key={user.uid} user={user} />
					))}
			</div>

			<Searchbox />
		</div>
	);
};
