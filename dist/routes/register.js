"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_1 = require("../middlewares/register");
const register_2 = __importDefault(require("../controllers/register"));
class UsersRegisterRoutes {
    init() {
        const router = (0, express_1.Router)();
        const controller = new register_2.default();
        router.post('/register', [register_1.registerValidation], controller.store);
        return router;
    }
}
exports.default = UsersRegisterRoutes;
