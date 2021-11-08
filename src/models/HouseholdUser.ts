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
import { UserHouseholdRole, UserHouseholdStatus } from "../utils/enums"
import { Household } from "./Household"
import { User } from "./User"

@Entity()
@ObjectType()
export class HouseholdUser extends BaseEntity {
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

  @Field(() => Int)
  @Column()
  userId: number

  @Field(() => Int)
  @Column()
  role: UserHouseholdRole

  @Field(() => Int)
  @Column()
  status: UserHouseholdStatus

  @OneToOne(() => User)
  user: User

  @OneToOne(() => Household)
  household: Household
}
