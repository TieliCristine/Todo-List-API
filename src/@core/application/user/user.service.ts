import { Injectable } from '@nestjs/common';
import { User } from "../../domain/model/user";
import { SelectUser } from "./use-cases/select-user.use-case";
import { CreateUser } from "./use-cases/create-user.use-case";
import { UserEntity } from "../../infra/database/type-orm/entities/user.entity";

@Injectable()
export class UserService {

    constructor(
        private createUser: CreateUser,
        private selectUser: SelectUser,
    ) {
    }

    async getAll(): Promise<User[]> {
        return await this.selectUser.getAll();
    }

    async getById(id: number): Promise<User> {
        return await this.selectUser.getById(id);
    }

    async getUserByEmail(email: string): Promise<User> {
        return await this.selectUser.getByEmail(email);
    }

    async create(entity: UserEntity): Promise<User> {
        return await this.createUser.createUser(entity);
    }
}
