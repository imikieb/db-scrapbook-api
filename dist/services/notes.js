"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const repositories_1 = require("../database/repositories");
class NotesService {
    async find() {
        const repository = new repositories_1.NotesRepository();
        const notes = await repository.find();
        return notes;
    }
    async create(NotesDTO) {
        const repository = new repositories_1.NotesRepository();
        if (NotesDTO.note) {
            const notes = await repository.create(NotesDTO);
            return notes;
        }
    }
    async update(NotesDTO) {
        const repository = new repositories_1.NotesRepository();
        if (NotesDTO.note) {
            const notes = await repository.update(NotesDTO);
            return notes;
        }
    }
    async delete(noteID) {
        const repository = new repositories_1.NotesRepository();
        await repository.delete(noteID);
    }
}
exports.NotesService = NotesService;
