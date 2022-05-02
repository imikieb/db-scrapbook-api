"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = void 0;
const services_1 = require("../services");
const constants_1 = require("../constants");
const registerValidation = async (request, response, next) => {
    const { name, password } = request.body;
    const service = new services_1.UsersService();
    const users = await service.find();
    const nameAuth = users?.find(user => user.name === name);
    if (!name || !password) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: constants_1.fillFields
        });
    }
    if (name.length < 4) {
        return response.status(constants_1.httpBadRequestCode).json((0, constants_1.fieldsLength)('O nome', 'mínimo', 4));
    }
    if (password.length < 8) {
        return response.status(constants_1.httpBadRequestCode).json((0, constants_1.fieldsLength)('A senha', 'mínimo', 8));
    }
    if (!/^[a-zA-Z]/.test(name)) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: 'O nome deverá começar com uma letra.'
        });
    }
    if (password.search(/^(?=.*[a-z]).*$/) < 0) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: 'A senha deve conter uma letra minúscula.'
        });
    }
    if (password.search(/^(?=.*[A-Z]).*$/) < 0) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: 'A senha deve conter uma letra maiúscula.'
        });
    }
    if (password.search(/[0-9]/) < 0) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: 'A senha deve conter um número.'
        });
    }
    if (password.search(/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/) < 0) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: 'A senha deve conter um caracter especial.'
        });
    }
    if (nameAuth) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: 'Usuário já cadastrado.'
        });
    }
    next();
};
exports.registerValidation = registerValidation;
