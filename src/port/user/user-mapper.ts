import { User } from "src/domain/user/entities/user";
import { AppMapper } from "../mapper";

interface IUserMapper<R> extends AppMapper<R, User> {}

export type { IUserMapper };
