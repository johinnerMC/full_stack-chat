import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE: ChatStatus = {
	uid: "",
	activeChat: null, //? UID del usuario al que le voy a enviar mensajes
	users: [
		{
			uid: "",
			name: "",
			email: "",
			online: false,
		},
	], //? Todos los usuarios de mongooDB
	messages: [], //? Todos los mensajes del chat selecionado
};

type User = {
	uid: string;
	name: string;
	email: string;
	online: boolean;
};
type Msg = {
	of: string;
	for: string;
	message: string;
	createdAt: Date;
};

type Users = {
	users: User[];
};

type Uid = {
	uid: string;
};

type NewMsg = {
	messages: Msg;
};

interface Active {
	activeChat: null | string;
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	messages: any[] | Msg[];
}

interface ChatStatus extends Users, Uid, Active {}

const chatSlice = createSlice({
	name: "chat",
	initialState: DEFAULT_STATE,
	reducers: {
		chatUsers: (state, action: PayloadAction<Users>) => {
			state.users = action.payload.users;
		},
		activeChat: (state, action: PayloadAction<Active>) => {
			state.activeChat = action.payload.activeChat;
			state.messages = action.payload.messages;
		},
		getMessages: (state, action: PayloadAction) => {
			state.messages = action.payload;
		},
		newMessages: (state, action: PayloadAction<NewMsg>) => {
			state.messages.push(action.payload.messages);
		},
		cleanChat: (state) => {
			state.activeChat = null
			state.messages = []
			state.uid = ''
			state.users = []
		}



	},
});

export default chatSlice.reducer;

export const { chatUsers, activeChat, newMessages, getMessages, cleanChat } = chatSlice.actions;
