import { DBEntity } from "./db.entity";

class UserDB extends DBEntity {
	constructor(data: UserDB) {
		super(data);
		Object.assign(this, data);
	}
	id: number;
	name: string;

	email: string;
}

export { UserDB };
