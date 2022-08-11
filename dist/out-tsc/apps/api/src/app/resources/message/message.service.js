"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
const forever_1 = require("async/forever");
const redis = new ioredis_1.default(12000);
const sub = new ioredis_1.default(12000);
const pub = new ioredis_1.default(12000);
let MessageService = class MessageService {
    create(createMessageInput) {
        return 'This action adds a new message';
    }
    findAll() {
        return `This action returns all message`;
    }
    findOne(id) {
        return `This action returns a #${id} message`;
    }
    update(id, updateMessageInput) {
        return `This action updates a #${id} message`;
    }
    remove(id) {
        return `This action removes a #${id} message`;
    }
    subscribe(id) {
        return (0, forever_1.default)();
    }
};
MessageService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], MessageService);
exports.MessageService = MessageService;
// Usage 1: As message hub
const processMessage = (message) => {
    console.log('Id: %s. Data: %O', message[0], message[1]);
};
function listenForMessage(lastId = '$') {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // `results` is an array, each element of which corresponds to a key.
        // Because we only listen to one key (mystream) here, `results` only contains
        // a single element. See more: https://redis.io/commands/xread#return-value
        const results = yield sub.xread('BLOCK', 0, 'STREAMS', 'user-stream', lastId);
        const [key, messages] = results[0]; // `key` equals to "user-stream"
        return messages;
    });
}
setInterval(() => {
    // `redis` is in the block mode due to `redis.xread('BLOCK', ....)`,
    // so we use another connection to publish messages.
    pub.xadd('user-stream', '*', 'name', 'John', 'age', '20');
}, 1000);
// Usage 2: As a list
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        redis
            .pipeline()
            .xadd('list-stream', '*', 'id', 'item1')
            .xadd('list-stream', '*', 'id', 'item2')
            .xadd('list-stream', '*', 'id', 'item3')
            .exec();
        const items = yield redis.xrange('list-stream', '-', '+', 'COUNT', 2);
        console.log(items);
        // [
        //   [ '1647321710097-0', [ 'id', 'item1' ] ],
        //   [ '1647321710098-0', [ 'id', 'item2' ] ]
        // ]
    });
}
//# sourceMappingURL=message.service.js.map