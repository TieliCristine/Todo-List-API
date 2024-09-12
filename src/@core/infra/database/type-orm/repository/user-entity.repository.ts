import { FindManyOptions, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../../../../domain/repository/user.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../../../domain/model/user";

export class UserEntityRepository extends Repository<UserEntity> implements UserRepository {

    constructor(
        @InjectRepository(UserEntity) repository: Repository<UserEntity>
    ) {
        super(repository.target, repository.manager, repository.queryRunner);
    }

    async createUser(entity: UserEntity): Promise<User> {
        const userEntity = await this.save(entity);
        return Promise.resolve(await this.getUserById(userEntity.id));
    }

    async getAllUsers(): Promise<User[]> {
        return Promise.resolve([]);
    }

    async getUserByEmail(email: string): Promise<User> {
        return Promise.resolve(await this.findOneBy({ email: email }));
    }

    async getUserById(id: number): Promise<User> {
        return Promise.resolve(undefined);
    }

    async removeUser(id: number): Promise<User> {
        return Promise.resolve(undefined);
    }

    async updateUser(id: number, user: UserEntity): Promise<User> {
        return Promise.resolve(undefined);
    }

    async exists(where: FindManyOptions): Promise<boolean> {
        return Promise.resolve(undefined);
    }

}