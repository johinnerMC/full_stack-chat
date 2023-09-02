import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CircleLoading } from "../components";
import { ChatRoutes } from "../routes/ChatRoutes";
import { useAppSelector } from "../store/hooks/store";

const AppRouter = () => {
	const { status } = useAppSelector((state) => state.user);

	if (status === "checking") return <CircleLoading />;

	return (
		<Routes>
			{status === "authenticated" ? (
				<Route path="/*" element={<ChatRoutes />} />
			) : (
				<Route path="/auth/*" element={<AuthRoutes />} />
			)}

			<Route path="/*" element={<Navigate to={"/auth/login"} />} />
		</Routes>
	);
};

export default AppRouter;
