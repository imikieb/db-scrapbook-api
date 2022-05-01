import { Request, Response } from 'express';
import { NotesService, UsersService } from '../services';
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
        const { name } = request.params;
        const usersService = new UsersService();
        const notesService = new NotesService();

        try {
            const users = await usersService.find();
            const notes = await notesService.find();
            const nameAuth = users?.find(user => user.name === name);
            const userId = nameAuth?.id;
            const noteAuth = notes?.filter(note => note.user_id === userId);
            const showNotes = noteAuth.map(note => note);
    
            return response.json(showNotes);
        } catch(error) {
            throw new HttpError(defaultErrorMessage, httpInternalErrorCode);
        }
    }

    async store(request: Request, response: Response) {
        const { note, user_id } = request.body;
        const service = new NotesService();

        try {
            const users = await service.create({
                note,
                user_id
            });

            return response.status(httpCreatedCode).json(actionMessage('Nota criada')), users;
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