import { Router } from 'express';
import UsersController from '../controllers/users';

export default class UsersRoutes {
    init(): Router {
        const router = Router();
        const controller = new UsersController();
        
        router.get('/:name/users', controller.index);

        return router;
    }
}