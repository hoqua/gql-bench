import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Message {
  @Field(() => String, { nullable: true })
  text?: string;
}
