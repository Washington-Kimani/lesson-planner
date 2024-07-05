import express from 'express';
import passport from 'passport';
import { initPassportLocal } from '../controllers/passport.controllers.js';
import { checkLoggedIn, checkLoggedOut, getPageLogin, postLogOut } from '../controllers/login.controllers.js';
import { createNewUser, getPageRegister } from '../controllers/register.controllers.js';
import { createNewStudent, getCreateStudent } from '../controllers/students.controllers.js';


// Init all passport
initPassportLocal();

const router = express.Router();

export const initWebRoutes = (app) => {
    router.get("/", checkLoggedIn, (req,res)=>{
        res.render("home", {title: 'HomePage', user: req.user});
    });

    router.get("/dashboard", checkLoggedIn, (req, res)=>{
        res.render("dashboard", {title: 'Dashboard', user: req.user});
    });

    router.get("/teachers",checkLoggedIn, (req,res)=>{
        res.render("teachers", {title: 'Teachers', user: req.user});
    });

    router.get("/students", checkLoggedIn, (req,res)=>{
        res.render("students", {title: 'Students', user: req.user});
    });

    router.get("/new_student",checkLoggedIn, getCreateStudent);
    router.post("/new_student", checkLoggedIn, createNewStudent);


    router.get("/login", checkLoggedOut, getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    router.get("/register", getPageRegister);
    router.post("/register", createNewUser);
    router.post("/logout", postLogOut);
    return app.use("/", router);
};