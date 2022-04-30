import { Router } from 'express';
import { notesValidation } from '../middlewares/notes';
import NotesController from '../controllers/notes';

export default class NotesRoutes {
    init(): Router {
        const router = Router();
        const controller = new NotesController();

        router.get('/:name/notes', controller.index);
        router.post('/:name/notes', [notesValidation], controller.store);
        router.put('/:name/notes/:id', [notesValidation], controller.update);
        router.delete('/:name/notes/:id', controller.delete);

        return router;
    }
}