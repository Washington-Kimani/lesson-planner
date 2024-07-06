import express from 'express';
import passport from 'passport';
import { initPassportLocal } from '../controllers/passport.controllers.js';
import { checkLoggedIn, checkLoggedOut, getPageLogin, postLogOut } from '../controllers/login.controllers.js';
import { createNewUser, getPageRegister } from '../controllers/register.controllers.js';
import { allStudents, createNewStudent, deleteStudent, getCreateStudent, seachStudent } from '../controllers/students.controllers.js';
import { allTeachers } from '../controllers/teacher.controllers.js';

// Init all passport
initPassportLocal();

const router = express.Router();

export const initWebRoutes = (app) => {
    /* NAVIGATION RELATED ROUTES */
    //home route
    router.get("/", checkLoggedIn, (req, res)=>{
        res.render("dashboard", {title: 'Dashboard', user: req.user});
    });

    router.get("/teachers",checkLoggedIn, allTeachers);

    /* ALL STUDENT RELATED ROUTES    */
    //get all students route
    router.get("/students", checkLoggedIn, allStudents);

    //get create student route page
    router.get("/new_student",checkLoggedIn, getCreateStudent);

    //actually create new student route
    router.post("/new_student", checkLoggedIn, createNewStudent);
    
    //search for a student by name
    router.get('/search/', checkLoggedIn, seachStudent);

    //delete a student
    router.post('/delete/:id', checkLoggedIn, deleteStudent);

    //show profile
    router.get('/profile', checkLoggedIn, (req,res)=>{
        res.render('profile', {title: 'Profile', user: req.user});
    });


    /* AUTH ROUTES */
    //login routes
    router.get("/login", checkLoggedOut, getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    //registration related routes
    router.get("/register", getPageRegister);
    router.post("/register", createNewUser);
    router.post("/logout", postLogOut);
    return app.use("/", router);
};