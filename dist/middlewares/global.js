"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalMiddleware = void 0;
const globalMiddleware = (request, response, next) => {
    const { ip, method } = request;
    console.log(ip, method);
    next();
};
exports.globalMiddleware = globalMiddleware;
