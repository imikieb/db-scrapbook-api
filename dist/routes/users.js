"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("../controllers/users"));
class UsersRoutes {
    init() {
        const router = (0, express_1.Router)();
        const controller = new users_1.default();
        router.get('/:name/users', controller.index);
        return router;
    }
}
exports.default = UsersRoutes;
