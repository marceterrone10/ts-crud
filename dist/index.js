"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const environments_1 = require("./config/environments");
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
/*
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});*/
app.use('/api/products', product_routes_1.default);
(0, db_1.connection)();
app.listen(environments_1.PORT, () => {
    console.log(`Server is running on http://localhost:${environments_1.PORT}`);
});
