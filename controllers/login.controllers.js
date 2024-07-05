import { validationResult } from "express-validator";
import { loginHandler } from "../services/login.services.js";

export const getPageLogin = (req, res) => {
    return res.render("login", {
        title: 'Login Page',
        errors: req.flash("errors")
    });
};

export const handleLogin = async (req, res) => {
    let errorsArr = [];
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/login");
    }

    try {
        await loginHandler(req.body.email, req.body.password);
        return res.redirect("/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/login");
    }
};

export const checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
};

export const checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

export const postLogOut = (req, res) => {
    req.session.destroy(function (err) {
        return res.redirect("/login");
    });
};