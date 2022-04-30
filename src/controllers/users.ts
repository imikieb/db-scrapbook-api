import { Request, Response } from 'express';
import { UsersService } from '../services';

export default class UsersController {
    async index(request: Request, response: Response) {
        const { name } = request.params;
        const service = new UsersService();

        try {
            const users = await service.find();
            const nameAuth = users.find(user => user.name === name);
    
            return response.json(nameAuth);
        } catch(error) {
            throw new Error('Erro no servidor.');
        }
    }
}