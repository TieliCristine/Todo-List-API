import { UserEntityRepository } from "../../../infra/database/type-orm/repository/user-entity.repository";
import { User } from "../../../domain/model/user";

export class SelectUser {
    constructor(
        private repository: UserEntityRepository
    ) {
    }

    async getAll(): Promise<User[]> {
        return await this.repository.getAllUsers();
    }

    async getById(id: number): Promise<User> {
        return await this.repository.getUserById(id);
    }

    async getByEmail(email: string): Promise<User> {
        return await this.repository.getUserByEmail(email);
    }
}