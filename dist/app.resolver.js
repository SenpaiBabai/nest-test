"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const app_schema_1 = require("./app.schema");
const app_service_1 = require("./app.service");
let AppResolver = class AppResolver {
    constructor(appService) {
        this.appService = appService;
    }
    async allTodos() {
        return this.appService.findAll();
    }
    async findTodo(id) {
        return this.appService.findById(id);
    }
    async createTodo(id, name, completed) {
        return this.appService.createTodo(id, name, completed);
    }
    async deleteTodo(id) {
        return this.appService.deleteTodo(id);
    }
    async editTodo(id, name, completed) {
        return this.appService.editTodo(id, name, completed);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [app_schema_1.Data]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "allTodos", null);
__decorate([
    (0, graphql_1.Query)(() => app_schema_1.Data),
    __param(0, (0, graphql_1.Args)({ name: 'id', nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "findTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => app_schema_1.Data),
    __param(0, (0, graphql_1.Args)({ name: 'id', nullable: false })),
    __param(1, (0, graphql_1.Args)({ name: 'name', nullable: false })),
    __param(2, (0, graphql_1.Args)({ name: 'completed', nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "createTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => app_schema_1.Data),
    __param(0, (0, graphql_1.Args)({ name: 'id', nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "deleteTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => app_schema_1.Data),
    __param(0, (0, graphql_1.Args)({ name: 'id', nullable: false })),
    __param(1, (0, graphql_1.Args)({ name: 'name', nullable: false })),
    __param(2, (0, graphql_1.Args)({ name: 'completed', nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "editTodo", null);
AppResolver = __decorate([
    (0, graphql_1.Resolver)(() => app_schema_1.Data),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppResolver);
exports.AppResolver = AppResolver;
//# sourceMappingURL=app.resolver.js.map