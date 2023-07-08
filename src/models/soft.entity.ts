import { Column, Entity } from 'typeorm';
import { BaseMongoEntity } from './base.entity';

@Entity()
export class SoftMongoEntity extends BaseMongoEntity {
  @Column()
  deletedAt: Date;
}
