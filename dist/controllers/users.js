"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const httpError_1 = require("../errors/httpError");
const constants_1 = require("../constants");
class UsersController {
    async index(request, response) {
        const { name } = request.params;
        const service = new services_1.UsersService();
        try {
            const users = await service.find();
            const nameAuth = users.find(user => user.name === name);
            return response.json(nameAuth);
        }
        catch (error) {
            throw new httpError_1.HttpError(constants_1.defaultErrorMessage, constants_1.httpInternalErrorCode);
        }
    }
}
exports.default = UsersController;
