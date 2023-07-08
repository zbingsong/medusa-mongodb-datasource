import { ModuleExports } from '@medusajs/modules-sdk';
import { MongoLoader } from './loaders';
import { MongoDatasource } from './datasource';
import { BaseMongoEntity, SoftMongoEntity } from 'models';

const moduleExports: ModuleExports = {
  service: MongoDatasource,
  loaders: [MongoLoader],
  models: [BaseMongoEntity, SoftMongoEntity],
};

export default moduleExports;
