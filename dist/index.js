"use strict";
/*import express, {Express, Request, Response} from 'express';
const app:Express = express();
const port = 3000;
app.get('/', (req:Request, res:Response) => {
res.send('Hello Typescript!')
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express')
//const morgan = require('morgan')
/*import express, { Request, Response } from 'express';
import morgan from 'morgan';
const app = express()
const port = 3000
app.use(morgan('dev'))
//direccion, callback
app.get('/', (req: Request, res: Response) => {
res.send('UP AND RUNNING ')
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})*/
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
const app = (0, express_1.default)();
const morgan = require('morgan');
const port = 3000;
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
