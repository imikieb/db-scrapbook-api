import { Request, Response, NextFunction } from 'express';

export const globalMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const { ip, method } = request;
    
    console.log(ip, method);

    next();
}