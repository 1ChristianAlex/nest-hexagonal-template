interface AppMapper<R, D> {
	toRecord(data: D): R;
	toDomain(data: R): D;
}

export { AppMapper };
