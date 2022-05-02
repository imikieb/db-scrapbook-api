"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesRepository = void 0;
const Notes_1 = require("../entities/Notes");
class NotesRepository {
    async find() {
        const notes = await Notes_1.NotesEntity.find();
        return notes;
    }
    async create(NotesDTO) {
        const notes = await new Notes_1.NotesEntity(NotesDTO.note, NotesDTO.user_id);
        notes.save();
        return notes;
    }
    async update(NotesDTO) {
        const notes = await Notes_1.NotesEntity.findOne(NotesDTO.id);
        if (notes) {
            notes.note = NotesDTO.note;
            await notes.save();
        }
        return notes;
    }
    async delete(noteID) {
        await Notes_1.NotesEntity.delete(noteID);
    }
}
exports.NotesRepository = NotesRepository;
