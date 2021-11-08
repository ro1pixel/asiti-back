import { GraphQLSchema } from "graphql"
import { buildSchema } from "type-graphql"
import { HouseholdResolver } from "../resolvers/household.resolver"

export default (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [HouseholdResolver],
    // authChecker,
  })
