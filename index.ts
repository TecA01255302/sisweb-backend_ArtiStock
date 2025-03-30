
/*import express, {Express, Request, Response} from 'express';
const app:Express = express();
const port = 3000;
app.get('/', (req:Request, res:Response) => {
res.send('Hello Typescript!')
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})*/

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

import express, { Express, Request, Response } from "express";
import apiRouter from './src/routes';

const app: Express = express();
const morgan = require('morgan');
const port = 3000;

app.use(morgan('dev'));
app.use(express.json()); 
app.use(apiRouter);

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});
