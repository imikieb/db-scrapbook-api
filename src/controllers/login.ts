import { Request, Response } from 'express';

export default class UsersLoginController {
    async loginStore(request: Request, response: Response) {
        return response.json({
            message: 'Usuário logado com sucesso.'
        });
    }

    async userStore(request: Request, response: Response) {
        return response.json({
            message: 'Usuário validado com sucesso.'
        });
    }
}