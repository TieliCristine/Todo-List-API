import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "../../domain/model/user";
import { Result } from "../../domain/type/result.type";

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
    ) {
    }

    @Get()
    async getAll(): Promise<Result<User>> {
        return {
            data: await this.userService.getAll(),
            message: null
        }
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Result<User>> {
        return {
            data: await this.userService.getById(+id),
            message: null
        }
    }

    // @Post()
    // async create(@Body() createUserDto: CreateUserDto): Promise<Result<User>> {
    //
    // }
}
