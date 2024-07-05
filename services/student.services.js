import { pool } from "../configs/db.config.js";

export const createStudent = async (student) => {
    try {
        const isEmailExist = await checkStudentExists(data.admission_number);

        if (isEmailExist) {
            throw new Error(`This student "${data.full_name}" has already been registered`);
        }

        const { full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two } = student

        const result = await pool.query(
            `INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two) VALUES (?,?,?,?,?,?,?,?)`,
            [full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two],
        );

        console.log('User created successfully:', result);
        return `Student created successfully`;
        
    } catch (error) {
        console.log(error);
    }
}

const checkStudentExists = async (admission_number) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM students WHERE admission_number = ?`, [admission_number]);
        return rows.length > 0;
    } catch (error) {
        throw error;
    }
};