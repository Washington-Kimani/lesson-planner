import { validationResult } from "express-validator";
import { createLessonPlan, deleteLessonPlanById, getLessonPlanById, getLessonPlans, search } from "../services/lesson_plan.services.js";


export const getAllLessonPlans = async (req, res) => {
    const teacher_id = req.user.id;
    const lessonPlans = await getLessonPlans(teacher_id);
    // Add an index starting from 1 to each lesson plan object
    const lessonPlansWithIndex = lessonPlans.map((lessonPlan, index) => ({
        ...lessonPlan,
        index: index + 1,
        name: req.user.fullnames
    }));

    //load all the lesson plans
    return res.render("lesson_plans", { title: "All Students", lessonPlansWithIndex, user: req.user, errors: req.flash('errors') });
}

//load the page for creating a new lesson plan
export const getCreateLesson = async (req, res) => {
    return res.render('new_lesson_plan', { title: "Create New Lesson PLan", errors: req.flash('errors'), user: req.user })
}

//search a lesson plan
export const searchLessonPlan = async (req, res) => {
    const teacher_id = req.user.id,
        { query } = req.params
    const results = await search(teacher_id, query);
    res.send(results);
}

export const createNewLessonPlan = async (req, res) => {
    const teacher_id = req.user.id;
    // Validate required fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash('errors', errors.array().map(err => err.msg));
        return res.redirect('/new_lesson_plan');
    }

    // Create new student
    const lesson_plan = req.body;
    try {
        await createLessonPlan(lesson_plan, teacher_id);
        // Redirect to students list immediately after creation
        return res.redirect('/lesson_plans');
    } catch (error) {
        console.error('Error creating student:', error);
        req.flash('errors', error.message);
        return res.redirect('/new_lesson_plan');
    }
};

//load the edit lesson plan page i.e for iclusive of the data
export const getEditLessonPlan = async (req,res)=>{
    const { id } = req.params;
    // console.log(id);
    const lessonPlan = await getLessonPlanById(id);
    // console.log(lessonPlan);
    return res.render('edit_lesson_plan', { title: "Edit Lesson Plan", lessonPlan, errors: req.flash('errors'), user: req.user });
}

export const deleteLessonPlan = async (req, res) => {
    const teacher_id = req.user.id;
    const { id } = req.params;
    try {
        await deleteLessonPlanById(id, teacher_id);
        return res.redirect('/lesson_plans');
    } catch (error) {
        console.error('Error deleting student:', error);
        req.flash('errors', error.message);
        return res.redirect('/lesson_plans');
    }
}