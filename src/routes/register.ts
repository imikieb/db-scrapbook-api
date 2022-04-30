import { Router } from 'express';
import { registerValidation } from '../middlewares/register';
import UsersRegisterController from '../controllers/register';

export default class UsersRegisterRoutes {
    init(): Router {
        const router = Router();
        const controller = new UsersRegisterController();

        router.post('/register', [registerValidation], controller.store);

        return router;
    }
}