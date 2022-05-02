"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = exports.loginValidation = void 0;
const services_1 = require("../services");
const constants_1 = require("../constants");
const loginValidation = async (request, response, next) => {
    const { name, password } = request.body;
    const service = new services_1.UsersService();
    const users = await service.find();
    const nameAuth = users?.find(user => user.name === name);
    const passwordAuth = nameAuth?.password;
    if (!name || !password) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: constants_1.fillFields
        });
    }
    if (!nameAuth || passwordAuth !== password) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: 'Nome ou senha incorretos.'
        });
    }
    next();
};
exports.loginValidation = loginValidation;
const userValidation = async (request, response, next) => {
    const { name } = request.body;
    const service = new services_1.UsersService();
    const users = await service.find();
    const nameAuth = users?.find(user => user.name === name);
    if (!nameAuth) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: 'Usuário não logou.'
        });
    }
    next();
};
exports.userValidation = userValidation;
