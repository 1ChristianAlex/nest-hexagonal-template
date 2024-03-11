import { User } from "src/domain/user/entities/user";

interface IUserControlle {
	getUser(): Promise<User>;
}

export type { IUserControlle };
