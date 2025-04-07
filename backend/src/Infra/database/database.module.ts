import { Module } from '@nestjs/common';
import { connectionSisvansilwebProviders } from './config/connection.sisvansilweb.provider';


@Module({
    providers: [
        ...connectionSisvansilwebProviders
    ],
    exports: [
        ...connectionSisvansilwebProviders
    ],
})

export class DatabaseModule {}


