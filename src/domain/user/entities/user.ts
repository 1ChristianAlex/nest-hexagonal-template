class User {
	constructor(data: User) {
		Object.assign(this, data);
	}
	id: number;
	name: string;

	email: string;
}

export { User };
