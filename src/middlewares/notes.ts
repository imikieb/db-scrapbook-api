import { Request, Response, NextFunction } from 'express';

export const notesValidation = async (request: Request, response: Response, next: NextFunction) => {
    const { note, user_id } = request.body;

    if(!note) {
        return response.status(400).json({
            message: 'Preencha o campo.'
        });
    }

    if(!user_id) {
        return response.status(400).json({
            message: 'Usuário não encontrado.'
        });
    }

    if(note.length > 50) {
        return response.status(400).json({
            message: 'O campo ultrapassou o número máximo de caracteres.'
        });
    }

    next();
}