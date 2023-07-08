import { LoaderOptions } from '@medusajs/modules-sdk';
import { asValue } from 'awilix';
import { Connection, createConnection } from 'mongoose';
import { DataSource } from 'typeorm';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { MongoDataSourceOptions } from 'types';

// export default async ({
//   container,
//   logger,
//   options,
// }: LoaderOptions<Record<string, any>>): Promise<void> => {
//   const { mongoUrl, mongoOptions } = options as MongoDataSourceOptions;
//   const connection: Connection = createConnection();

//   try {
//     await connection.openUri(mongoUrl, mongoOptions);
//     logger?.info(`connected to MongoDB at ${mongoUrl}`);
//   } catch (error) {
//     logger?.error(error);
//   }

//   container.register({ connection: asValue(connection) });
// };

export default async ({
  container,
  logger,
  options,
}: LoaderOptions<Record<string, any>>): Promise<void> => {
  // const { mongoUrl, mongoOptions } = options as MongoDataSourceOptions;
  const MongoDatasource = new DataSource({
    type: 'mongodb',
    synchronize: true,
    ...(options as MongoDataSourceOptions).mongoOptions,
  });

  try {
    await MongoDatasource.initialize();
    logger?.info(`connected to MongoDB at ${options?.url}`);
  } catch (error) {
    logger?.error(error);
  }

  container.register({ connection: asValue(MongoDatasource) });
};
