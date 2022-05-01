import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import Database from './database/connections/Database';
import UsersRoutes from './routes/users';
import UsersRegisterRoutes from './routes/register';
import UsersLoginRoutes from './routes/login';
import NotesRoutes from './routes/notes';
import { globalMiddleware } from './middlewares';
import { HttpError } from './errors/httpError';

export default class Application {
    readonly #express: express.Application;

    constructor() {
        this.#express = express();
    }

    async init() {
        this.config();
        this.middlewares();
        this.errors();
        this.routes();
        await this.database();
    }

    start(port: number) {
        this.#express.listen(port, () => {
            console.log(`A aplicação está rodando na porta ${port}.`);
        });
    }

    private config() {
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({extended: false}));
        this.#express.use(cors());
    }

    private middlewares () {
        this.#express.use(globalMiddleware);
    }

    private errors() {
        this.#express.use((error: HttpError, request: Request, response: Response, next: NextFunction) => {
            return response.json({
                mensagem: error.message
            });
        });
    }

    private routes() {
        const usersRouter = new UsersRoutes().init();
        const usersRegisterRouter = new UsersRegisterRoutes().init();
        const usersLoginRouter = new UsersLoginRoutes().init();
        const notesRouter = new NotesRoutes().init();

        this.#express.use(usersRouter);
        this.#express.use(usersRegisterRouter);
        this.#express.use(usersLoginRouter);
        this.#express.use(notesRouter);
    }

    private async database() {
        await Database.getInstance();
    }
}