"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let DatabaseService = class DatabaseService extends client_1.PrismaClient {
    onModuleInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.$connect();
        });
    }
    enableShutdownHooks(app) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.$on('beforeExit', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield app.close();
            }));
        });
    }
};
DatabaseService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map