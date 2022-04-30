import { Request, Response } from 'express';
import { UsersService } from '../services';

export default class UsersRegisterController {
    async store(request: Request, response: Response) {
        const { name, password } = request.body;
        const service = new UsersService();

        try {
            const users = await service.create({
                name,
                password
            });

            return response.status(201).json({
                message: 'Usuário cadastrado com sucesso.'
            }), users;
        } catch(error) {
            throw new Error('Erro no servidor.');
        }
    }
}