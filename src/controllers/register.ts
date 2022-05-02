import { Request, Response } from 'express';
import { UsersService } from '../services';
import { HttpError } from '../errors/httpError';
import {
    httpInternalErrorCode,
    httpCreatedCode,
    defaultErrorMessage,
    actionMessage
} from '../constants';

export default class UsersRegisterController {
    async store(request: Request, response: Response) {
        const { name, password } = request.body;
        const service = new UsersService();

        try {
            await service.create({
                name: name,
                password: password
            });

            return response.status(httpCreatedCode).json(actionMessage('Usuário criado'));
        } catch(error) {
            throw new HttpError(defaultErrorMessage, httpInternalErrorCode);
        }
    }
}