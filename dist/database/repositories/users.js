"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const Users_1 = require("../entities/Users");
class UsersRepository {
    async find() {
        const usersName = await Users_1.UsersEntity.find();
        return usersName;
    }
    async create(UsersDTO) {
        const users = await new Users_1.UsersEntity(UsersDTO.name, UsersDTO.password);
        users.save();
        return users;
    }
}
exports.UsersRepository = UsersRepository;
