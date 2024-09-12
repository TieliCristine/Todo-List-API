import { User } from "../model/user";
import { UserEntity } from "../../infra/database/type-orm/entities/user.entity";
import { FindManyOptions } from "typeorm";

export interface UserRepository {
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    updateUser(id: number, user: UserEntity): Promise<User>;
    createUser(entity: UserEntity): Promise<User>;
    removeUser(id: number): Promise<User>;
    exists(where: FindManyOptions): Promise<boolean>;
}