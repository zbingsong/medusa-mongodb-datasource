import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class BaseMongoEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
