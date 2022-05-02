"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const httpError_1 = require("../errors/httpError");
const constants_1 = require("../constants");
class NotesController {
    async index(request, response) {
        const { name } = request.params;
        const usersService = new services_1.UsersService();
        const notesService = new services_1.NotesService();
        try {
            const users = await usersService.find();
            const notes = await notesService.find();
            const nameAuth = users?.find(user => user.name === name);
            const userId = nameAuth?.id;
            const noteAuth = notes?.filter(note => note.user_id === userId);
            const showNotes = noteAuth.map(note => note);
            return response.json(showNotes);
        }
        catch (error) {
            throw new httpError_1.HttpError(constants_1.defaultErrorMessage, constants_1.httpInternalErrorCode);
        }
    }
    async store(request, response) {
        const { note, user_id } = request.body;
        const service = new services_1.NotesService();
        try {
            const users = await service.create({
                note,
                user_id
            });
            return response.status(constants_1.httpCreatedCode).json((0, constants_1.actionMessage)('Nota criada')), users;
        }
        catch (error) {
            throw new httpError_1.HttpError(constants_1.defaultErrorMessage, constants_1.httpInternalErrorCode);
        }
    }
    async update(request, response) {
        const { id } = request.params;
        const { note, user_id } = request.body;
        const service = new services_1.NotesService;
        try {
            const users = await service.update({
                id: parseInt(id),
                note,
                user_id
            });
            return response.status(constants_1.httpSuccessCode).json((0, constants_1.actionMessage)('Nota editada')), users;
        }
        catch (error) {
            throw new httpError_1.HttpError(constants_1.defaultErrorMessage, constants_1.httpInternalErrorCode);
        }
    }
    async delete(request, response) {
        const { id } = request.params;
        const service = new services_1.NotesService;
        try {
            await service.delete(parseInt(id));
            return response.status(constants_1.httpNoContentCode).json((0, constants_1.actionMessage)('Nota deletada'));
        }
        catch (error) {
            throw new httpError_1.HttpError(constants_1.defaultErrorMessage, constants_1.httpInternalErrorCode);
        }
    }
}
exports.default = NotesController;
