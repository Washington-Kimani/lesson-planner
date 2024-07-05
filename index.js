import express from 'express';
import http from 'http';
import dotenv from "dotenv";
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';

//import routes
import { initWebRoutes } from './routes/web.routes.js';

//config environment variables
dotenv.config();


//initialize a server
const app = express();
const server = http.createServer(app);

//run server on a port
const port = process.env.PORT || 5050;

//use cookie parser
app.use(cookieParser('secret'));

//config session
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
}));


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));


//view engine
app.set('view engine', 'hbs');

//Enable flash message
app.use(flash());

//passport setup
app.use(passport.initialize());
app.use(passport.session());

// init all web routes
initWebRoutes(app);

//start the server
server.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`);
});