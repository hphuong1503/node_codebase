import express from 'express';
import morgan from 'morgan';
import Helmet from "helmet";
import compression from 'compression';

const app = express();


// init middleware
app.use(morgan('common')) // trang thai code duoc to mau
morgan('combine') // tieu chuan cua apache, full
morgan('common')
morgan('short')
morgan('tiny')
morgan('dev')

app.use(Helmet())
app.use(compression())

// node --watch server.js : su dung cho node > 19

// init db

// inti router

// hanling error

app.get('/', (req, res) => {
    res.send('Hello World!');
});


export default app;