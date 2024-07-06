import { getTeachers } from "../services/teacher.service.js";


export const allTeachers = async (req, res) => {
    const teachers = await getTeachers();
    // console.log(teachers);
    const withDate = teachers.map((teacher) => ({
        ...teacher,
        date: teacher.DOB.toLocaleDateString('en-US'),
    }));
    return res.render("teachers", {
        errors: req.flash("errors"),
        title: 'Teachers',
        user: req.user,
        teachers: withDate
    });
};