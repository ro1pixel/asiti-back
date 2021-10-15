import { Field, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
class Test {
  @Field()
  name: String;
}

@Resolver(Test)
export class TestResolver {
  @Query(() => Test)
  async test(): Promise<Test> {
    return {
      name: "testtt",
    };
  }
}
