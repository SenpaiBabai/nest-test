import { Field, ID } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Data {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field()
  name: string;

  @Field()
  completed: boolean;
}
