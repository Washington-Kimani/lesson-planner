import { pool } from "../configs/db.config.js";
import bcrypt from 'bcryptjs';

export const createUser = async (data) => {
    try {
        const isEmailExist = await checkExistEmail(data.email);

        if (isEmailExist) {
            throw new Error(`This email "${data.email}" has already been registered. Please choose another email.`);
        }

        let { fullnames, registration_number, email, password, phone, gender, DOB, subject_one, subject_two } = data;
        password = await bcrypt.hash(password, 10);

        const result = await pool.query(
            `INSERT INTO teachers (fullnames, registration_number, email, password, phone, gender, DOB, subject_one, subject_two) VALUES (?,?,?,?,?,?,?,?,?)`,
            [fullnames, registration_number, email, password, phone, gender, DOB, subject_one, subject_two]
        );

        console.log('User created successfully:', result);
        return `Teacher created successfully`;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

const checkExistEmail = async (email) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM teachers WHERE email = ?`, [email]);
        return rows.length > 0;
    } catch (error) {
        throw error;
    }
};
