import { SocketProvider } from "./context/SocketContex";
import AppRouter from "./router/AppRouter";

function App() {
	return (
		<SocketProvider>
			<AppRouter />
		</SocketProvider>
	);
}

export default App;
