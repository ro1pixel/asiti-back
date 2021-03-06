import { Field, Int, ObjectType } from "type-graphql"
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { User } from "./User"

@Entity()
@ObjectType()
export class Household extends BaseEntity {
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
  title: string

  @Field(() => Int)
  @Column()
  createdBy: number

  @OneToOne(() => User)
  user: User
}
