import { validationResult } from "express-validator";
import { createUser } from "../services/register.services.js";


//load the registration page
export const getPageRegister = (req, res) => {
    return res.render("register", {
        errors: req.flash("errors"),
        title: 'Registration Page',
    });
};

//register a new teacher
export const createNewUser = async (req, res) => {
    // Validate required fields
    let errorsArr = [];
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/register");
    }

    // Create a new user
    let data = req.body;
    try {
        await createUser(data);
        return res.redirect("/login");
    } catch (err) {
        console.error('Registration error:', err);
        req.flash("errors", err.message); // Use err.message to capture the error message
        return res.redirect("/register");
    }
};
