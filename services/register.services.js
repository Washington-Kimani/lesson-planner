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
            await pool.query(
                'INSERT INTO teachers (fullnames, regNumber, email, password, phone, gender, DOB, subject1, subject2) VALUES (?,?,?,?,?,?,?,?,?)',
                [fullnames,regNumber,email,hashed,phone,gender,DOB,subject1,subject2],
                (err, rows)=>{
                    if (err) {
                        reject(false)
                    }else{
                        resolve(rows);
                    }
                }
            );
        }
    });
};

let checkExistEmail = (email) => {
    return new Promise( async (resolve, reject) => {
        try {
            await pool.query(`SELECT * FROM teachers WHERE email = ?`, [email], (err, rows) => {
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