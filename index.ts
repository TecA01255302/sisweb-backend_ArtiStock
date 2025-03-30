
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
import express, { Request, Response } from 'express';
import morgan from 'morgan';
const app = express()
const port = 3000
app.use(morgan('dev'))
app.get('/', (req: Request, res: Response) => {
res.send('UP AND RUNNING ')
}) //direccion, callback
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
