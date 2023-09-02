import { OnHold, RightContainer, Sidebar } from "../components";

export const ChatPage = () => {
	return (
		<section className="flex h-screen overflow-hidden">
			<Sidebar />
			<div className="bg-gray-100 xl:w-9/12 lg:w-8/12 hidden lg:block">
				{false ? <RightContainer /> : <OnHold />}
			</div>
		</section>
	);
};
