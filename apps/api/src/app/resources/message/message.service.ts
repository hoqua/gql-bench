import { Injectable } from '@nestjs/common';

import Redis from 'ioredis';


const pub = new Redis(12000);



async function readMessages(topic: string) {
  // `results` is an array, each element of which corresponds to a key.
  // Because we only listen to one key (mystream) here, `results` only contains
  // a single element. See more: https://redis.io/commands/xread#return-value
  console.log('READ BLOCK', 0, 'STREAMS', topic, '$')
  const sub = new Redis(12000)
  const results = await sub.xread('BLOCK', 500, 'STREAMS', topic, '$');
  console.log(results)

  const [key, messages] = results?.[0] || []; // `key` equals to "user-stream"

  return messages?.toString();
}

const getRandomNumberAsString = () =>
  Math.floor(Math.random() * 1000).toString();

@Injectable()
export class MessageService {
  async addMessage(id) {
    console.log('pushing to', id);
    const pushToTopic = id || getRandomNumberAsString();
    await pub.xadd(
      pushToTopic,
      'MAXLEN',
      '~',
      '20',
      '*',
      'message id' + pushToTopic,
      'message text pushed to topic | message text pushed to topic | message text pushed to topic | message text pushed to topic'
    );
    return undefined;
  }

  async readMessage(id) {
    const text = await readMessages(id || getRandomNumberAsString());

    return { text };
  }
}
