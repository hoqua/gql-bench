import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
  Context,
} from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message } from './entities/message.entity';

import { PubSub } from 'mercurius';

@Resolver(() => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}


  @Subscription((returns) => Message)
  commentAdded(
    @Context('pubsub') pubSub: PubSub,
    @Args('id', { type: () => Int }) id: number
  ) {
    console.log('RESOLVER EXECUTED', id);
    return pubSub.subscribe(id.toString());
  }

  @Mutation(() => Boolean)
  async addMessage(@Args('id') id?: String) {
    await this.messageService.addMessage(id);
    return true
  }

  @Query((returns) => Message, {nullable: true})
  async readMessage(@Args('id') id?: String) {
    return this.messageService.readMessage(id);
  }
}
