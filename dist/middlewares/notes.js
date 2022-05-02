"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesValidation = void 0;
const constants_1 = require("../constants");
const notesValidation = async (request, response, next) => {
    const { note, user_id } = request.body;
    if (!note) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: 'Preencha o campo.'
        });
    }
    if (!user_id) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: 'Usuário não encontrado.'
        });
    }
    if (note.length > 40) {
        return response.status(constants_1.httpBadRequestCode).json({
            message: 'O campo ultrapassou o número máximo de caracteres.'
        });
    }
    next();
};
exports.notesValidation = notesValidation;
