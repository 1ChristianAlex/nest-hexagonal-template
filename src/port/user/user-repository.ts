import { User } from "src/domain/user/entities/user";

interface IUserRepository {
	getById(id: number): Promise<User>;
}

export type { IUserRepository };
