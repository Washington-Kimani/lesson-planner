import express from 'express';
import passport from 'passport';
import { initPassportLocal } from '../controllers/passport.controllers.js';
import { validateRegister } from '../validation/auth.validation.js';
import { createUser } from '../services/register.services.js';
import { checkLoggedIn, checkLoggedOut, getPageLogin, postLogOut } from '../controllers/login.controllers.js';
import { getPageRegister } from '../controllers/register.controllers.js';


// Init all passport
initPassportLocal();

const router = express.Router();

export const initWebRoutes = (app) => {
    router.get("/", checkLoggedIn, (req,res)=>{
        res.render("home", {title: 'HomePage'});
    });
    router.get("/login", checkLoggedOut, getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    router.get("/register", getPageRegister);
    router.post("/register", validateRegister, createUser);
    router.post("/logout", postLogOut);
    return app.use("/", router);
};