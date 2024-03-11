import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/domain/user/entities/user";
import { UserDB } from "src/infrastructure/database/models/user.entity";
import { IUserMapper } from "src/port/user/user-mapper";
import { IUserRepository } from "src/port/user/user-repository";
import { USER_MAPPER_INJECTION } from "./user-mapper";

@Injectable()
class UserRepository implements IUserRepository {
	constructor(
		@Inject(USER_MAPPER_INJECTION)
		private readonly _userMapper: IUserMapper<UserDB>,
	) {}

	async getById(id: number): Promise<User> {
		return this._userMapper.toDomain({
			email: "test@email.com.br",
			createAt: new Date(),
			id: id,
			name: "teste",
			updateAt: new Date(),
		});
	}
}

const USER_REPOSITORY_INJECTION = Symbol("USER_REPOSITORY_INJECTION");

export { UserRepository, USER_REPOSITORY_INJECTION };
