import {
  Field,
  FieldResolver,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
} from "type-graphql"
import { Household } from "../models/Household"
import { User } from "../models/User"

@Resolver(Household)
export class HouseholdResolver {
  @Query(() => Household, { nullable: true })
  async household(): Promise<Household | null> {
    var h = await Household.find()

    return h[0]
  }

  @Mutation(() => Household)
  async createHousehold(): Promise<Household> {
    var newH = Household.create({ title: "asdf", createdBy: 1 })

    await newH.save()
    return newH
  }

  @FieldResolver(() => User, { nullable: true })
  async user(@Root() household: Household): Promise<User | undefined> {
    return await User.findOne({ id: household.createdBy })
  }
}
