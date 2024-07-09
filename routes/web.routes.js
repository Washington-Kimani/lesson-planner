import express from 'express';
import passport from 'passport';
import { initPassportLocal } from '../controllers/passport.controllers.js';
import { checkLoggedIn, checkLoggedOut, getPageLogin, postLogOut } from '../controllers/login.controllers.js';
import { createNewUser, getPageRegister } from '../controllers/register.controllers.js';
import { allStudents, createNewStudent, deleteStudent, getCreateStudent, seachStudent } from '../controllers/students.controllers.js';
import { allTeachers } from '../controllers/teacher.controllers.js';
import { createNewLessonPlan, deleteLessonPlan, editTheLessonPlan, getAllLessonPlans, getCreateLesson, getEditLessonPlan, searchLessonPlan, subjectOneLessonPlans, subjectTwoLessonPlans, viewLessonPlan } from '../controllers/lesson_plans.controllers.js';

// Init all passport
initPassportLocal();

const router = express.Router();

export const initWebRoutes = (app) => {
    /* NAVIGATION RELATED ROUTES */
    //home route
    router.get("/", checkLoggedIn, (req, res) => {
        res.render("dashboard", { title: 'Dashboard', user: req.user });
    });

    router.get("/teachers", checkLoggedIn, allTeachers);

    /* ALL STUDENT RELATED ROUTES    */
    //get all students route
    router.get("/students", checkLoggedIn, allStudents);

    //get create student route page
    router.get("/new_student", checkLoggedIn, getCreateStudent);

    //actually create new student route
    router.post("/new_student", checkLoggedIn, createNewStudent);

    //search for a student by name
    router.get('/search/', checkLoggedIn, seachStudent);

    //delete a student
    router.post('/delete/:id', checkLoggedIn, deleteStudent);

    //show profile
    router.get('/profile', checkLoggedIn, (req, res) => {
        console.log(req.user.id);
        res.render('profile', { title: 'Profile', user: req.user });
    });

    /* lesson routes */
    //subject one lesson plans route
    router.get('/subject_one_lesson_plans', checkLoggedIn, subjectOneLessonPlans);
    //subject one lesson plans route
    router.get('/subject_two_lesson_plans', checkLoggedIn, subjectTwoLessonPlans);

    //search lesson plan
    router.get('/search_plan', checkLoggedIn, searchLessonPlan);

    //page to view one lesson plan
    router.get('/lesson_plan/:id', checkLoggedIn, viewLessonPlan);

    //new lesson plan page
    router.get('/new_lesson_plan', checkLoggedIn, getCreateLesson);

    //create new lesson plan
    router.post('/new_lesson_plan', checkLoggedIn, createNewLessonPlan);

    //edit lesson plan page i.e the form with pre-filled data
    router.get('/edit_lesson_plan/:id', checkLoggedIn, getEditLessonPlan);

    //actually edit the lesson plan
    router.post('/edit_lesson_plan/:id', checkLoggedIn, editTheLessonPlan);

    //delete the lesson plan
    router.post('/delete_lesson_plan/:id', checkLoggedIn, deleteLessonPlan);


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