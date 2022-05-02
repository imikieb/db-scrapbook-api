"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_1 = require("../middlewares/notes");
const notes_2 = __importDefault(require("../controllers/notes"));
class NotesRoutes {
    init() {
        const router = (0, express_1.Router)();
        const controller = new notes_2.default();
        router.get('/:name/notes', controller.index);
        router.post('/:name/notes', [notes_1.notesValidation], controller.store);
        router.put('/:name/notes/:id', [notes_1.notesValidation], controller.update);
        router.delete('/:name/notes/:id', controller.delete);
        return router;
    }
}
exports.default = NotesRoutes;
