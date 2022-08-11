"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMessageInput = void 0;
const tslib_1 = require("tslib");
const create_message_input_1 = require("./create-message.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateMessageInput = class UpdateMessageInput extends (0, graphql_1.PartialType)(create_message_input_1.CreateMessageInput) {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], UpdateMessageInput.prototype, "id", void 0);
UpdateMessageInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], UpdateMessageInput);
exports.UpdateMessageInput = UpdateMessageInput;
//# sourceMappingURL=update-message.input.js.map