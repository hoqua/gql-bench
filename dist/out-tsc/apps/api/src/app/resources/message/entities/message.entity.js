"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let Message = class Message {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Example field (placeholder)' }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "text", void 0);
Message = tslib_1.__decorate([
    (0, graphql_1.ObjectType)()
], Message);
exports.Message = Message;
//# sourceMappingURL=message.entity.js.map