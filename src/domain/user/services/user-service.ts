import { User } from "../entities/user";

interface IUserService {
	getUserById(id: number): Promise<User>;
}

export type { IUserService };
