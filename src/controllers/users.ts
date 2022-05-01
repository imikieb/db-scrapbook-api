import { Request, Response } from 'express';
import { UsersService } from '../services';
import { HttpError } from '../errors/httpError';
import { httpInternalErrorCode, defaultErrorMessage } from '../constants';

export default class UsersController {
    async index(request: Request, response: Response) {
        const { name } = request.params;
        const service = new UsersService();

        try {
            const users = await service.find();
            const nameAuth = users.find(user => user.name === name);
    
            return response.json(nameAuth);
        } catch(error) {
            throw new HttpError(defaultErrorMessage, httpInternalErrorCode);
        }
    }
}