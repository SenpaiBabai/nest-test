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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const todos_1 = require("./data/todos");
let AppService = class AppService {
    constructor() {
        this.data = todos_1.dataTodo;
    }
    async findAll() {
        return this.data;
    }
    async findById(id) {
        const data = this.data.filter((todo) => todo.id === id);
        if (data.length) {
            return data[0];
        }
        return null;
    }
    async createTodo(id, name, boolValue = true) {
        this.data.push({
            id: id,
            name: name,
            completed: boolValue,
        });
    }
    async deleteTodo(id) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                this.data.splice(i, 1);
            }
        }
    }
    async editTodo(id, name, completed) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                this.data[i].name = name;
                this.data[i].completed = completed;
            }
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map