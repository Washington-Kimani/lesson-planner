import { validationResult } from "express-validator";
import { createStudent } from "../services/student.services.js";

export const getCreateStudent = (req, res) => {
    return res.render("new_student", {
        errors: req.flash("errors"),
        title: 'Register New Student',
    });
};

export const createNewStudent = async (req, res) => {
    // Validate required fields
    let errorsArr = [];
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/new_student");
    }

    // Create a new user
    let student = req.body;
    try {
        await createStudent(student);
        return res.redirect("/students");
    } catch (err) {
        console.error('Registration error:', err);
        req.flash("errors", err.message); // Use err.message to capture the error message
        return res.redirect("/new_student");
    }
};
