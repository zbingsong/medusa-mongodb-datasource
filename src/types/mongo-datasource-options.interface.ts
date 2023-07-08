import { ConnectOptions } from 'mongoose';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

export interface MongoDataSourceOptions {
  type: string;
  mongoOptions?: Omit<MongoConnectionOptions, 'type'>;
}
