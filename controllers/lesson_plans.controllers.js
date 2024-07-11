import { validationResult } from "express-validator";
import { createLessonPlan, deleteLessonPlanById, getLessonPlanById, getSubjectOnePlans, getSubjectTwoPlans, search, updateLessonPlan } from "../services/lesson_plan.services.js";

export const viewLessonPlan = async (req, res)=>{
    const {id} = req.params;
    const lessonPlan = await getLessonPlanById(id);
    return res.render("lesson_plan", {title: "Lesson Plan", lessonPlan, user: req.user, errors: req.flash('errors')});
}

//load the page for creating a new lesson plan
export const getCreateLesson = async (req, res) => {
    return res.render('new_lesson_plan', { title: "Create New Lesson PLan", errors: req.flash('errors'), user: req.user })
}

//subject one lesson plans
export const subjectOneLessonPlans = async (req,res)=>{
    const {id, subject_one} = req.user;
    const lessonPlans = await getSubjectOnePlans(id, subject_one);

    //render the page
    const lessonPlansWithIndex = lessonPlans.map((lessonPlan, index) => ({
        ...lessonPlan,
        index: index + 1,
        name: req.user.fullnames,
    }));

    //load all the lesson plans
    return res.render("lesson_plans", { title: `${req.user.subject_one} Lesson Plans`, lessonPlansWithIndex, subject: req.user.subject_one, user: req.user, errors: req.flash('errors') });
}
//subject two lesson plans
export const subjectTwoLessonPlans = async (req,res)=>{
    const {id, subject_two} = req.user;
    const lessonPlans = await getSubjectTwoPlans(id, subject_two);

    //render the page
    const lessonPlansWithIndex = lessonPlans.map((lessonPlan, index) => ({
        ...lessonPlan,
        index: index + 1,
        name: req.user.fullnames,
    }));


    //load all the lesson plans
    return res.render("lesson_plans", { title: `${req.user.subject_two} Lesson Plans`, lessonPlansWithIndex, subject: req.user.subject_two, user: req.user, errors: req.flash('errors') });
}

//search a lesson plan
export const searchLessonPlan = async (req, res) => {
    const query = req.query.query; // Search query from frontend
    const subject = req.query.subject; // Subject filter from frontend
    const id = req.user.id

    let lessonPlans = [];

    if (query) {
        // Perform search based on query (if provided) and on the specific subject
        const plans = await search(query, id);
        lessonPlans = plans.filter(plan=>plan.subject === subject);
    } else if (subject) {
        // Retrieve lesson plans based on selected subject
        if (subject === req.user.subject_one) {
            lessonPlans = await getSubjectOnePlans(req.user.id, req.user.subject_one);
        } else if (subject === req.user.subject_two) {
            lessonPlans = await getSubjectTwoPlans(req.user.id, req.user.subject_two);
        }
    }

    

    // Assuming lessonPlans are prepared with necessary details
    res.json(lessonPlans);
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
        return res.redirect('/');
    } catch (error) {
        console.error('Error creating student:', error);
        req.flash('errors', error.message);
        return res.redirect('/new_lesson_plan');
    }
};

//load the edit lesson plan page i.e for iclusive of the data
export const getEditLessonPlan = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    const lessonPlan = await getLessonPlanById(id);
    // console.log(lessonPlan);
    lessonPlan.date = lessonPlan.date.toISOString().split('T')[0];
    return res.render('edit_lesson_plan', { title: "Edit Lesson Plan", lessonPlan, errors: req.flash('errors'), user: req.user });
}

export const editTheLessonPlan = async (req, res) => {
    const { id } = req.params;
    const lesson_plan = req.body;
    try {
        await updateLessonPlan(lesson_plan, id);
        return res.redirect('/');
    } catch (error) {
        console.error('Error editing student:', error);
        req.flash('errors', error.message);
        return res.redirect(`/edit_lesson_plan/${id}`);
    }
}

export const deleteLessonPlan = async (req, res) => {
    const teacher_id = req.user.id;
    const { id } = req.params;
    try {
        await deleteLessonPlanById(id, teacher_id);
        return res.redirect('/');
    } catch (error) {
        console.error('Error deleting student:', error);
        req.flash('errors', error.message);
        return res.redirect('/lesson_plans');
    }
}