import { Field, Int, ObjectType } from "type-graphql"
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { Household } from "./Household"

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

  @Field(() => Int)
  @Column()
  householdId: number

  @Field()
  @Column()
  title: string

  @OneToOne(() => Household)
  household: Household
}
