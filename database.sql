CREATE DATABASE lessonplanner;

use lessonplanner;

CREATE TABLE teachers (
	id INT auto_increment primary key,
    fullnames VARCHAR(100) not null,
    registration_number VARCHAR(20) not null,
    email VARCHAR(100) not null,
    password VARCHAR(255) not null,
    phone VARCHAR(15) not null,
    gender CHAR(10) not null,
    DOB DATE not null,
    subject_one VARCHAR(50) not null,
    subject_two VARCHAR(50) not null
);

CREATE TABLE lesson_plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_id INT NOT NULL,
    term VARCHAR(50) NOT NULL,
    subject VARCHAR(50) NOT NULL,
    topic VARCHAR(255) NOT NULL,
    week INT NOT NULL,
    lesson_title VARCHAR(255) NOT NULL,
    grade_level VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    objectives TEXT,
    standards TEXT,
    materials_needed TEXT,
    teaching_method TEXT,
    instructional_procedures TEXT,
    assessment TEXT,
    homework TEXT,
    feedback TEXT,
    adjustment TEXT,
    FOREIGN KEY (teacher_id) REFERENCES teachers(id)
);



CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    admission_number VARCHAR(20) NOT NULL,
    guardian_or_parent_number VARCHAR(20),
    grade VARCHAR(10),
    home_address VARCHAR(255),
    comments TEXT,
    subject_one VARCHAR(50),
    subject_two VARCHAR(50),
    teacher_id INT NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES teachers(id)
);
