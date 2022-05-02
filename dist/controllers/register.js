"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const httpError_1 = require("../errors/httpError");
const constants_1 = require("../constants");
class UsersRegisterController {
    async store(request, response) {
        const { name, password } = request.body;
        const service = new services_1.UsersService();
        try {
            const users = await service.create({
                name,
                password
            });
            return response.status(constants_1.httpCreatedCode).json((0, constants_1.actionMessage)('Usuário criado')), users;
        }
        catch (error) {
            throw new httpError_1.HttpError(constants_1.defaultErrorMessage, constants_1.httpInternalErrorCode);
        }
    }
}
exports.default = UsersRegisterController;
