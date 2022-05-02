"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../middlewares/login");
const login_2 = __importDefault(require("../controllers/login"));
class UsersLoginRoutes {
    init() {
        const router = (0, express_1.Router)();
        const controller = new login_2.default();
        router.post('/login', [login_1.loginValidation], controller.loginStore);
        router.post('/validate', [login_1.userValidation], controller.userStore);
        return router;
    }
}
exports.default = UsersLoginRoutes;
