abstract class DBEntity {
	constructor(data: DBEntity) {
		Object.assign(this, data);
	}
	createAt: Date;
	updateAt: Date;
}

export { DBEntity };
