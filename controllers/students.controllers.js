import { validationResult } from "express-validator";
import { createStudent,deleteStudentById , getAllStudents, search } from "../services/student.services.js";

export const allStudents = async (req, res) => {
    const students = await getAllStudents();
    // Add an index starting from 1 to each student object
    const studentsWithIndex = students.map((student, index) => ({
        ...student,
        index: index + 1
    }));
    return res.render("students", { title: "All Students", students: studentsWithIndex, user: req.user });
}

export const seachStudent = async (req, res) => {
    const { query } = req.query;
    const results = await search(query);
    return res.send(results);
}

export const getCreateStudent = (req, res) => {
    return res.render("new_student", {
        errors: req.flash("errors"),
        title: 'Register New Student',
    });
};


export const createNewStudent = async (req, res) => {
    // Validate required fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash('errors', errors.array().map(err => err.msg));
        return res.redirect('/new_student');
    }

    // Create new student
    const studentData = req.body;
    try {
        await createStudent(studentData);
        // Redirect to students list immediately after creation
        return res.redirect('/students');
    } catch (error) {
        console.error('Error creating student:', error);
        req.flash('errors', error.message);
        return res.redirect('/new_student');
    }
};

export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteStudentById(id);
        return res.redirect('/students');
    } catch (error) {
        console.error('Error deleting student:', error);
        req.flash('errors', error.message);
        return res.redirect('/students');
    }
}