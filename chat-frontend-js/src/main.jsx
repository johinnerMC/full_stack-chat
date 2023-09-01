import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from './store/store';
import ChatApp from './ChatApp'
import "./index.css"



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<ChatApp />
		</Provider>
	</React.StrictMode>,
)
