import { Connection, ObjectId } from 'mongoose';
import { DataSource, EntityTarget, MongoRepository, ObjectLiteral } from 'typeorm';
import { MongoDataSourceOptions } from 'types';

interface InjectedDependencies {
  datasource: DataSource;
}

class MongoDatasource {
  protected readonly datasource: DataSource;

  constructor({ datasource }: InjectedDependencies, options: MongoDataSourceOptions) {
    this.datasource = datasource;
  }

  getRepository<Entity extends ObjectLiteral>(
    repoClass: EntityTarget<Entity>,
  ): MongoRepository<Entity> {
    return this.datasource.getMongoRepository(repoClass);
  }
}

export default MongoDatasource;
