import { Request, Response } from 'express';
import { HttpError } from '../errors/httpError';
import { httpInternalErrorCode, defaultErrorMessage } from '../constants';

export default class UsersLoginController {
    async loginStore(request: Request, response: Response) {
        try {
            return response.json({
                message: 'Usuário logado com sucesso.'
            });
        } catch(error) {
            throw new HttpError(defaultErrorMessage, httpInternalErrorCode);
        }
    }

    async userStore(request: Request, response: Response) {
        try {
            return response.json({
                message: 'Usuário validado com sucesso.'
            });
        } catch(error) {
            throw new HttpError(defaultErrorMessage, httpInternalErrorCode); 
        }
    }
}