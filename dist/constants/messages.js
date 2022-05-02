"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldsLength = exports.actionMessage = exports.fillFields = exports.defaultErrorMessage = void 0;
exports.defaultErrorMessage = 'Ocorreu um erro, tente novamente mais tarde.';
exports.fillFields = 'Preencha todos os campos.';
const actionMessage = (field) => {
    const message = { message: `${field} com sucesso.` };
    return message;
};
exports.actionMessage = actionMessage;
const fieldsLength = (field, amount, length) => {
    const message = { message: `${field} deve conter no ${amount} ${length} caracteres.` };
    return message;
};
exports.fieldsLength = fieldsLength;
