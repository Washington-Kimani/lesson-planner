
import { validationResult } from "express-validator";
import { createUser } from "../services/register.services.js";

export const getPageRegister = (req, res) => {
    return res.render("register", {
        errors: req.flash("errors"),
        title: 'Registration Page',
    });
};

export const createNewUser = async (req, res) => {
    //validate required fields
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

    //create a new user
    let data = req.body;
    try {
        await createUser(data);
        return res.redirect("/login");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/register");
    }
};