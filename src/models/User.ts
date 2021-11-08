import { Field, Int, ObjectType } from "type-graphql"
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"

@Entity()
@ObjectType()
export class User extends BaseEntity {
  //Start default columns
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date
  //End default columns

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  email: string

  @Field()
  @Column()
  birthDate: Date
}
