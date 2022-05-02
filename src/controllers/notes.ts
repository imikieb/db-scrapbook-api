import { Request, Response } from 'express';
import { NotesService } from '../services';
import { HttpError } from '../errors/httpError';
import { 
    httpInternalErrorCode,
    httpCreatedCode,
    httpNoContentCode,
    httpSuccessCode,
    defaultErrorMessage, 
    actionMessage
} from '../constants';

export default class NotesController {
    async index(request: Request, response: Response) {
        const { userId } = request.params;
        const notesService = new NotesService();

        try {
            const notes = await notesService.find();
            const noteAuth = notes?.filter(note => note.user_id === parseInt(userId));
    
            return response.json(noteAuth);
        } catch(error) {
            throw new HttpError(defaultErrorMessage, httpInternalErrorCode);
        }
    }

    async store(request: Request, response: Response) {
        const { note, user_id } = request.body;
        const service = new NotesService();

        try {
            await service.create({
                note: note,
                user_id: user_id
            });

            return response.status(httpCreatedCode).json(actionMessage('Nota criada'));
        } catch(error) {
            throw new HttpError(defaultErrorMessage, httpInternalErrorCode);
        }
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { note, user_id } = request.body;
        const service = new NotesService;

        try {
            const users = await service.update({
                id: parseInt(id),
                note,
                user_id
            });

            return response.status(httpSuccessCode).json(actionMessage('Nota editada')), users;
        } catch(error) {
            throw new HttpError(defaultErrorMessage, httpInternalErrorCode);
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new NotesService;

        try {
            await service.delete(parseInt(id));

            return response.status(httpNoContentCode).json(actionMessage('Nota deletada'));
        } catch(error) {
            throw new HttpError(defaultErrorMessage, httpInternalErrorCode);
        }
    }
}