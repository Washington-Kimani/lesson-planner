import { pool } from "../configs/db.config.js";


export const getAllStudents = async () => {
    try {
        const [rows] = await pool.query(`SELECT * FROM students`);
        return rows;
    } catch (error) {
        throw error;
    }
};

export const search = async query => {
    try {
        const [rows] = await pool.query(`SELECT * FROM students WHERE full_name LIKE '%${query}%'`);
        return rows;
    } catch (error) {
        throw error;
    }
}

export const createStudent = async student => {
    try {
        const isExist = await checkStudentExists(student.admission_number);

        if (isExist) {
            throw new Error(`This student "${student.full_name}" has already been registered`);
        }

        const { full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two } = student

        const result = await pool.query(
            `INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two) VALUES (?,?,?,?,?,?,?,?)`,
            [full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two],
        );

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