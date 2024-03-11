import { Controller, Get, Inject } from "@nestjs/common";
import { USER_SERVICE_INJECTION } from "src/application/user/user-service";
import { User } from "src/domain/user/entities/user";
import { IUserService } from "src/domain/user/services/user-service";
import { IUserControlle } from "src/port/user/user-controller";

@Controller("user")
class UserController implements IUserControlle {
	constructor(
		@Inject(USER_SERVICE_INJECTION) private readonly _userService: IUserService,
	) {}

	@Get()
	getUser(): Promise<User> {
		return this._userService.getUserById(1);
	}
}

export { UserController };
