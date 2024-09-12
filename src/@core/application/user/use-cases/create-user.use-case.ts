import { Injectable } from "@nestjs/common";
import { UserEntityRepository } from "../../../infra/database/type-orm/repository/user-entity.repository";
import { UserEntity } from "../../../infra/database/type-orm/entities/user.entity";
import { User } from "../../../domain/model/user";
import { CheckUsedEmail } from "./check-used-email.use-case";

@Injectable()
export class CreateUser {

    constructor(
        private repository: UserEntityRepository,
        private checkUsedEmail: CheckUsedEmail
    ) {
    }

    async createUser(entity: UserEntity): Promise<User> {
        await this.checkUsedEmail.exists('create', entity.email);
        return await this.repository.createUser(entity);
    }
}