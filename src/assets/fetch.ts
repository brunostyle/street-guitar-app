import { notify } from "@components";

const baseURL = import.meta.env.VITE_BASE_URL + '/api';

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface IFetch {
	endpoint: string;
	data?: any;
	method?: Methods;
}

export const fetcher = async ({ endpoint, method, data }: IFetch) => {
	const config = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) };
	const res = method === 'POST' ? await fetch(baseURL + endpoint, config) : await fetch(baseURL + endpoint);
	const info = await res.json();
	if (!res.ok) {
		info.map((err: any) => notify.error(err.error));
        throw new Error;
	}
	return info;
};

export const fetcherWithToken = async ({ endpoint, method, data }: IFetch) => {
	const TOKEN = localStorage.getItem('token') ?? '';
	let config =
		method === 'GET' || method === 'DELETE'
			? { method, headers: { 'access-token': TOKEN, 'Content-Type': 'application/json' } }
			: { method, headers: { 'access-token': TOKEN, 'Content-Type': 'application/json' }, body: JSON.stringify(data) };
	const res = await fetch(baseURL + endpoint, config);
	const info = await res.json();
	if (!res.ok) {
		info.map((err: any) => notify.error(err.error));
        throw new Error;
	}
	return info;
};

export const fetcherWithTokenFile = async ({ endpoint, method, data }: IFetch) => {
	const TOKEN = localStorage.getItem('token') ?? '';
	const config = { method, headers: { 'access-token': TOKEN }, body: data };
	const res = await fetch(baseURL + endpoint, config);
	const info = await res.json();
	if (!res.ok) {
		info.map((err: any) => notify.error(err.error));
		throw new Error;
	}
	return info;
};