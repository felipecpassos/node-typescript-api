"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.routes();
    }
    // Configuring the server
    /*
     * If we don't set PORT env variable,
     * the server port defaults to 3000
     */
    configuration() {
        this.app.set("port", process.env.PORT || 3000);
    }
    // Configuring routes
    routes() {
        this.app.get("/", (req, res) => {
            res.send("Hello world!");
        });
    }
    // Starts the server
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server is listening ${this.app.get("port")} port`);
        });
    }
}
const server = new Server();
server.start();
