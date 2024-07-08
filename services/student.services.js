import { pool } from "../configs/db.config.js";


export const getAllStudents = async (teacher_id) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM students where teacher_id = ?`, [teacher_id]);
        return rows;
    } catch (error) {
        throw error;
    }
};

export const search = async (query, teacher_id) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM students WHERE teacher_id = ? AND full_name LIKE '%${query}%'`, [teacher_id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

export const createStudent = async (student, teacher_id) => {
    try {
        const isExist = await checkStudentExists(student.admission_number);

        if (isExist) {
            throw new Error(`This student "${student.full_name}" has already been registered`);
        }

        const studentData = {...student, teacher_id};
        const result = await pool.query(`INSERT INTO students SET ?`, [studentData]);


        console.log('User created successfully:', result);
        return `Student created successfully`;

    } catch (error) {
        throw error;
    }
}

const checkStudentExists = async admission_number => {
    try {
        const [rows] = await pool.query(`SELECT * FROM students WHERE admission_number = ?`, [admission_number]);
        return rows.length > 0;
    } catch (error) {
        throw error;
    }
};

export const deleteStudentById = id => {
    try {
        const result = pool.query(`DELETE FROM students WHERE id = ?`, [id]);
        return result;
    } catch (error) {
        throw error;
    }
}