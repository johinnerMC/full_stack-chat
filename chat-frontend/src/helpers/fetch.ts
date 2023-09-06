//const baseUrl = process.env.REACT_APP_API_URL;
const baseUrl = "http://localhost:8080/api";

type FetchOptions = {
	endpoint: string;
	data: {};
	method: "GET" | "POST";
};

export const fetchSinToken = async (options: FetchOptions) => {
	const { endpoint, data, method = "GET" } = options;
	const url = `${baseUrl}/${endpoint}`;

	if (method === "GET") {
		const resp = await fetch(url);
		return await resp.json();
	} else {
		const resp = await fetch(url, {
			method,
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		});

		return await resp.json();
	}
};

export const fetchToken = async (endpoint: string) => {
	const url = `${baseUrl}/${endpoint}`;

	const token = localStorage.getItem("token");
	const x_token = token ? token : "";

	const resp = await fetch(url, {
		headers: {
			"x-token": x_token,
		},
	});

	return resp.json();
};
