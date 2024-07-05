import { pool } from "../configs/db.config.js";
import bcrypt from "bcryptjs";

export const loginHandler = async (email, password) => {
    try {
        let user = await findUserByEmail(email);

        if (!user) {
            throw new Error(`This user email "${email}" doesn't exist`);
        }

        let isMatch = await comparePassword(password, user);

        if (isMatch) {
            return true;
        } else {
            throw new Error(`The password that you've entered is incorrect`);
        }
    } catch (error) {
        throw error;
    }
};

export const findUserByEmail = async (email) => {
    try {
        const [rows] = await pool.query('SELECT * FROM teachers WHERE email = ?', [email]);
        return rows[0];
    } catch (error) {
        throw error;
    }
};

export const findUserById = async (id) => {
    try {
        const [rows] = await pool.query('SELECT * FROM teachers WHERE id = ?', [id]);
        return rows[0];
    } catch (error) {
        throw error;
    }
};

export const comparePassword = async (password, userObject) => {
    try {
        return await bcrypt.compare(password, userObject.password);
    } catch (error) {
        throw error;
    }
};
