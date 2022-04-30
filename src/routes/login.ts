import { Router } from 'express';
import { loginValidation, userValidation } from '../middlewares/login';
import UsersLoginController from '../controllers/login';

export default class UsersLoginRoutes {
    init(): Router {
        const router = Router();
        const controller = new UsersLoginController();

        router.post('/login', [loginValidation], controller.loginStore);
        router.post('/validate', [userValidation], controller.userStore);

        return router;
    }
}