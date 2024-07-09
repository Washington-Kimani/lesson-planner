import { pool } from "../configs/db.config.js";


export const getLessonPlans = async (teacher_id) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM lesson_plans WHERE teacher_id = ?`, [teacher_id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

export const search = async (query, teacher_id) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM lesson_plans WHERE teacher_id = ? AND lesson_title LIKE '%${query}%'`, [teacher_id])
        return rows;
    } catch (error) {
        throw error;
    }
}

//create a new lesson plan
export const createLessonPlan = async (lesson_plan, teacher_id) => {
    const lessonPlan = { ...lesson_plan, teacher_id }
    try {
        const [rows] = await pool.query(`INSERT INTO lesson_plans SET ?`, [lessonPlan]);
        return rows;
    } catch (error) {
        throw error;
    }
}

//get lesson plan by id to feed the update page
export const getLessonPlanById = async (id) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM lesson_plans WHERE id = ?`, [id]);
        return rows[0];
    } catch (error) {
        throw error;
    }
}

export const getSubjectOnePlans = async (id, subject_one) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM lesson_plans WHERE teacher_id =? AND subject =?`, [id, subject_one]);
        return rows;
    } catch (error) {
        throw error;
    }
}

export const getSubjectTwoPlans = async (id, subject_two) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM lesson_plans WHERE teacher_id =? AND subject =?`, [id, subject_two]);
        return rows;
    } catch (error) {
        throw error;
    }
}


export const updateLessonPlan = async (lesson_plan, id) => {
    try {
        const [rows] = await pool.query(`UPDATE lesson_plans SET ? WHERE id = ?`, [lesson_plan, id]); //update the lesson plan
        return rows;
    } catch (error) {
        throw error;
    }
}


export const deleteLessonPlanById = async id => {
    try {
        const result = await pool.query(`DELETE FROM lesson_plans WHERE id = ?`, [id]);
        return result
    } catch (error) {
        throw error;
    }
}