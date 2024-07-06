import { pool } from "../configs/db.config.js";


export const getTeachers = async () => {
    try{
        const rows = await pool.query(`SELECT * FROM teachers`);
        return rows[0];
    }catch(err){
        throw err;
    }
}