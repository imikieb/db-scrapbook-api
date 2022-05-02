"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Application_express;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Database_1 = __importDefault(require("./database/connections/Database"));
const users_1 = __importDefault(require("./routes/users"));
const register_1 = __importDefault(require("./routes/register"));
const login_1 = __importDefault(require("./routes/login"));
const notes_1 = __importDefault(require("./routes/notes"));
const global_1 = require("./middlewares/global");
class Application {
    constructor() {
        _Application_express.set(this, void 0);
        __classPrivateFieldSet(this, _Application_express, (0, express_1.default)(), "f");
    }
    async init() {
        this.config();
        this.middlewares();
        this.errors();
        this.routes();
        await this.database();
    }
    start(port) {
        __classPrivateFieldGet(this, _Application_express, "f").listen(port, () => {
            console.log(`A aplicação está rodando na porta ${port}.`);
        });
    }
    config() {
        __classPrivateFieldGet(this, _Application_express, "f").use(express_1.default.json());
        __classPrivateFieldGet(this, _Application_express, "f").use(express_1.default.urlencoded({ extended: false }));
        __classPrivateFieldGet(this, _Application_express, "f").use((0, cors_1.default)());
    }
    middlewares() {
        __classPrivateFieldGet(this, _Application_express, "f").use(global_1.globalMiddleware);
    }
    errors() {
        __classPrivateFieldGet(this, _Application_express, "f").use((error, request, response, next) => {
            return response.json({
                mensagem: error.message
            });
        });
    }
    routes() {
        const usersRouter = new users_1.default().init();
        const usersRegisterRouter = new register_1.default().init();
        const usersLoginRouter = new login_1.default().init();
        const notesRouter = new notes_1.default().init();
        __classPrivateFieldGet(this, _Application_express, "f").use(usersRouter);
        __classPrivateFieldGet(this, _Application_express, "f").use(usersRegisterRouter);
        __classPrivateFieldGet(this, _Application_express, "f").use(usersLoginRouter);
        __classPrivateFieldGet(this, _Application_express, "f").use(notesRouter);
    }
    async database() {
        await Database_1.default.getInstance();
    }
}
exports.default = Application;
_Application_express = new WeakMap();
