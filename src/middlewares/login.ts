import { Request, Response, NextFunction } from 'express';
import { UsersService } from '../services';
import { httpBadRequestCode, fillFields } from '../constants';

export const loginValidation = async (request: Request, response: Response, next: NextFunction) => {
    const { name, password } = request.body;
    const service = new UsersService();
    const users = await service.find();
    const nameAuth = users?.find(user => user.name === name);
    const passwordAuth = nameAuth?.password;

    if(!name || !password) {
        return response.status(httpBadRequestCode).json({
            message: fillFields
        });
    }

    if(!nameAuth || passwordAuth !== password) {
        return response.status(httpBadRequestCode).json({
            message: 'Nome ou senha incorretos.'
        });
    }

    next();
}

export const userValidation = async (request: Request, response: Response, next: NextFunction) => {
    const { name } = request.body;
    const service = new UsersService();
    const users = await service.find();
    const nameAuth = users?.find(user => user.name === name);

    if(!nameAuth) {
        return response.status(httpBadRequestCode).json({
            message: 'Usuário não logou.'
        });
    }

    next();
}