"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const message_service_1 = require("./message.service");
const message_entity_1 = require("./entities/message.entity");
const create_message_input_1 = require("./dto/create-message.input");
const update_message_input_1 = require("./dto/update-message.input");
let MessageResolver = class MessageResolver {
    constructor(messageService) {
        this.messageService = messageService;
    }
    createMessage(createMessageInput) {
        return this.messageService.create(createMessageInput);
    }
    findAll() {
        return this.messageService.findAll();
    }
    findOne(id) {
        return this.messageService.findOne(id);
    }
    updateMessage(updateMessageInput) {
        return this.messageService.update(updateMessageInput.id, updateMessageInput);
    }
    removeMessage(id) {
        return this.messageService.remove(id);
    }
    subscribe(id) {
        return this.messageService.subscribe(id);
    }
};
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => message_entity_1.Message),
    tslib_1.__param(0, (0, graphql_1.Args)('createMessageInput')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_message_input_1.CreateMessageInput]),
    tslib_1.__metadata("design:returntype", void 0)
], MessageResolver.prototype, "createMessage", null);
tslib_1.__decorate([
    (0, graphql_1.Query)(() => [message_entity_1.Message], { name: 'message' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], MessageResolver.prototype, "findAll", null);
tslib_1.__decorate([
    (0, graphql_1.Query)(() => message_entity_1.Message, { name: 'message' }),
    tslib_1.__param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], MessageResolver.prototype, "findOne", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => message_entity_1.Message),
    tslib_1.__param(0, (0, graphql_1.Args)('updateMessageInput')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [update_message_input_1.UpdateMessageInput]),
    tslib_1.__metadata("design:returntype", void 0)
], MessageResolver.prototype, "updateMessage", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => message_entity_1.Message),
    tslib_1.__param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], MessageResolver.prototype, "removeMessage", null);
tslib_1.__decorate([
    (0, graphql_1.Subscription)(() => message_entity_1.Message),
    tslib_1.__param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], MessageResolver.prototype, "subscribe", null);
MessageResolver = tslib_1.__decorate([
    (0, graphql_1.Resolver)(() => message_entity_1.Message),
    tslib_1.__metadata("design:paramtypes", [message_service_1.MessageService])
], MessageResolver);
exports.MessageResolver = MessageResolver;
//# sourceMappingURL=message.resolver.js.map