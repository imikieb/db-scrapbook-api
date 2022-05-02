"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const repositories_1 = require("../database/repositories");
class UsersService {
    async find() {
        const repository = new repositories_1.UsersRepository();
        const users = await repository.find();
        return users;
    }
    async create(UsersDTO) {
        const repository = new repositories_1.UsersRepository();
        if (UsersDTO.name.length > 3 && UsersDTO.name.length > 7) {
            const users = await repository.create(UsersDTO);
            return users;
        }
    }
}
exports.UsersService = UsersService;
