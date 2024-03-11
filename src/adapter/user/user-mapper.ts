import { Injectable } from "@nestjs/common";
import { User } from "src/domain/user/entities/user";
import { UserDB } from "src/infrastructure/database/models/user.entity";
import { IUserMapper } from "src/port/user/user-mapper";

@Injectable()
class UserMapper implements IUserMapper<UserDB> {
	toRecord(data: User): UserDB {
		return new UserDB({
			email: data.email,
			id: data.id,
			name: data.name,
			createAt: new Date(),
			updateAt: new Date(),
		});
	}
	toDomain(data: UserDB): User {
		return new User({
			email: data.email,
			id: data.id,
			name: data.name,
		});
	}
}

const USER_MAPPER_INJECTION = Symbol("USER_MAPPER_INJECTION");

export { UserMapper, USER_MAPPER_INJECTION };
