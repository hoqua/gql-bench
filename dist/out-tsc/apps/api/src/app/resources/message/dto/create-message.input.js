"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
let CreateMessageInput = class CreateMessageInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    tslib_1.__metadata("design:type", Number)
], CreateMessageInput.prototype, "exampleField", void 0);
CreateMessageInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], CreateMessageInput);
exports.CreateMessageInput = CreateMessageInput;
//# sourceMappingURL=create-message.input.js.map