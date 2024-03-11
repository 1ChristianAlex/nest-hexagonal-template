import { Inject, Injectable } from "@nestjs/common";
import { USER_REPOSITORY_INJECTION } from "src/adapter/user/user-repository";
import { User } from "src/domain/user/entities/user";
import { IUserService } from "src/domain/user/services/user-service";
import { IUserRepository } from "src/port/user/user-repository";

@Injectable()
class UserService implements IUserService {
	constructor(
		@Inject(USER_REPOSITORY_INJECTION)
		private readonly _userRepository: IUserRepository,
	) {}
	getUserById(id: number): Promise<User> {
		return this._userRepository.getById(id);
	}
}

const USER_SERVICE_INJECTION = Symbol("USER_SERVICE_INJECTION");

export { UserService, USER_SERVICE_INJECTION };
