export interface IUserDashboard {
	name: string;
	email: string;
	avatar?: string;
}

export interface IOrderDashboard {
	id: string;
	user: IUserDashboard;
	createdAt: string;
}

export interface IChartData {
	time: string;
	value: number;
}

export interface IChart {
	clients: number[];
	sells: number[];
}