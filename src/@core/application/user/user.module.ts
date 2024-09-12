import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { InfraModule } from "../../infra/infra.module";
import { HttpModule } from "@nestjs/axios";
import { CreateUser } from "./use-cases/create-user.use-case";
import { SelectUser } from "./use-cases/select-user.use-case";
import { CheckUsedEmail } from "./use-cases/check-used-email.use-case";

@Module({
  controllers: [UserController],
  imports: [InfraModule, HttpModule],
  providers: [
      UserService,
      CreateUser,
      SelectUser,
      CheckUsedEmail
  ],
})
export class UserModule {}
