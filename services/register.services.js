import { pool } from "../configs/db.config.js";
import bcrypt from 'bcryptjs';

export const createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        // check email is exist or not
        const isEmailExist = await checkExistEmail(data.email);
        if (isEmailExist) {
            reject(`This email "${data.email}" has already exist. Please choose an other email`);
        } else {
            const { fullnames, regNumber, email, password, phone, gender, DOB, subject1, subject2} = data;
            const hashed = await bcrypt.hashSync(password, 10);

            //create a new account
            pool.query(
                'INSERT INTO teachers set ? ', [fullnames,regNumber,email,hashed],(err, rows)=>{
                    if (err) {
                        reject(false)
                    }
                    resolve("Create a new user successful");
                }
            );
        }
    });
};

let checkExistEmail = (email) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM users WHERE email = ?`, [email], (err, rows) => {
                    if (err) {
                        reject(err)
                    }
                    if (rows.length > 0) {
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};