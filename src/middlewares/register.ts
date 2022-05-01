import { Request, Response, NextFunction } from 'express';
import { UsersService } from '../services';

export const registerValidation = async (request: Request, response: Response, next: NextFunction) => {
    const { name, password } = request.body;
    const service = new UsersService();
    const users = await service.find();
    const nameAuth = users?.find(user => user.name === name);

    if(!name || !password) {
        return response.status(400).json({
            message: 'Preencha todos os campos.'
        });
    }

    if(name.length < 4 || name.length > 30) {
        return response.status(400).json({
            message: 'O nome deve conter no mínimo 4 caracteres.'
        });
    }

    if(password.length < 8 || password.length > 30) {
        return response.status(400).json({
            message: 'A senha deve conter no mínimo 8 caracteres.'
        });
    }

    if(!/^[a-zA-Z]/.test(name)) {
        return response.status(400).json({
            message: 'O nome deverá começar com uma letra.'
        });
    }

    if(password.search(/^(?=.*[a-z]).*$/) < 0) {
        return response.status(400).json({
            message: 'A senha deve conter uma letra minúscula.'
        });
    }

    if(password.search(/^(?=.*[A-Z]).*$/) < 0) {
        return response.status(400).json({
            message: 'A senha deve conter uma letra maiúscula.'
        });
    }

    if(password.search(/[0-9]/) < 0) {
        return response.status(400).json({
            message: 'A senha deve conter um número.'
        });
    }

    if(password.search(/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/) < 0) {
        return response.status(400).json({
            message: 'A senha deve conter um caracter especial.'
        });
    }

    if(nameAuth) {
        return response.status(400).json({
            message: 'Usuário já cadastrado.'
        });
    }

    next();
}