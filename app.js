import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import pg from 'pg';
import db from './database/db.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended:true}));

db.authenticate()
    .then(()=> console.log('conecado...'))
    .catch(err => console.log('error', err))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Api RESTful ok, ejecutandose...');
   

})