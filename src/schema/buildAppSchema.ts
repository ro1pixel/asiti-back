import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { TestResolver } from "../resolvers/test-resolver.resolver";

export default (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [TestResolver],
    // authChecker,
  });
