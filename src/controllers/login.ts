import { Request, Response } from 'express';
import { HttpError } from '../errors/httpError';
import {
    httpInternalErrorCode,
    httpSuccessCode,
    defaultErrorMessage,
    actionMessage
} from '../constants';

export default class UsersLoginController {
    async loginStore(request: Request, response: Response) {
        try {
            return response.status(httpSuccessCode).json(actionMessage('Usuário logado'));
        } catch(error) {
            throw new HttpError(defaultErrorMessage, httpInternalErrorCode);
        }
    }

    async userStore(request: Request, response: Response) {
        try {
            return response.status(httpSuccessCode).json(actionMessage('Usuário validado'));
        } catch(error) {
            throw new HttpError(defaultErrorMessage, httpInternalErrorCode); 
        }
    }
}