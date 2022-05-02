"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpError_1 = require("../errors/httpError");
const constants_1 = require("../constants");
class UsersLoginController {
    async loginStore(request, response) {
        try {
            return response.status(constants_1.httpSuccessCode).json((0, constants_1.actionMessage)('Usuário logado'));
        }
        catch (error) {
            throw new httpError_1.HttpError(constants_1.defaultErrorMessage, constants_1.httpInternalErrorCode);
        }
    }
    async userStore(request, response) {
        try {
            return response.status(constants_1.httpSuccessCode).json((0, constants_1.actionMessage)('Usuário validado'));
        }
        catch (error) {
            throw new httpError_1.HttpError(constants_1.defaultErrorMessage, constants_1.httpInternalErrorCode);
        }
    }
}
exports.default = UsersLoginController;
