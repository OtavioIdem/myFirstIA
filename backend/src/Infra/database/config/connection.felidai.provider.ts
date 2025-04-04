import { DataSource } from 'typeorm';

export const connectionSisvansilwebProviders = [{
    provide: 'CONNECTION_FELIDAI',
    useFactory: async () => {
        const dataSource = new DataSource({
            type: 'mssql',
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.ENVIRONMENT === 'production'
                      ? process.env.DB_DATABASE_SISVANSILWEB
                      : process.env.DB_DATABASE_SISVANSILWEB_HOMOLOG,
            entities: [__dirname + '/../../../**/*.entity{.ts, .js}'],
            synchronize: false,
            options: {
                encrypt: false
            }
        });

        return dataSource.initialize();
    }
}]