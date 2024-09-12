import { Module } from '@nestjs/common';
import { DATASOURCE_CONFIG } from "./config/datasource.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import APP_CONFIG from "./config/app.config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [ APP_CONFIG ],
        }),
        TypeOrmModule.forRoot(DATASOURCE_CONFIG),
        TypeOrmModule.forFeature([

        ])
    ],
    providers: [],
    exports: [],
})
export class InfraModule {}
