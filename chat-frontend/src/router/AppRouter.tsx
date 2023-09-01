import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/auth/*" element={<AuthRoutes />} />

			<Route path="/*" element={<Navigate to={"/auth/login"} />} />
		</Routes>
	);
};

export default AppRouter;
