"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const message_resolver_1 = require("./message.resolver");
let MessageModule = class MessageModule {
};
MessageModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [message_resolver_1.MessageResolver, message_service_1.MessageService],
    })
], MessageModule);
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.module.js.map