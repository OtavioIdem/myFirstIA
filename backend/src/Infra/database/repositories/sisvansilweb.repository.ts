import { Connection } from "typeorm";


export const SisvansilwebRepository = [{
    provide: 'SISVANSILWEB_REPOSITORY',
    useFactory: (connection:Connection) => ({
        // ousrRepository: connection.getRepository(Sisousr)
    }),

    inject: ['CONNECTION_SISVANSILWEB']
}]