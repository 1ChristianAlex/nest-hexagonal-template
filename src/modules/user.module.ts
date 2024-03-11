import { Module } from "@nestjs/common";
import { UserController } from "src/adapter/user/user-controller";
import {
	UserMapper,
	USER_MAPPER_INJECTION,
} from "src/adapter/user/user-mapper";
import {
	UserRepository,
	USER_REPOSITORY_INJECTION,
} from "src/adapter/user/user-repository";
import {
	UserService,
	USER_SERVICE_INJECTION,
} from "src/application/user/user-service";

@Module({
	imports: [],
	controllers: [UserController],
	providers: [
		{ provide: USER_MAPPER_INJECTION, useClass: UserMapper },
		{ provide: USER_REPOSITORY_INJECTION, useClass: UserRepository },
		{ provide: USER_SERVICE_INJECTION, useClass: UserService },
	],
})
export class UserModule {}
