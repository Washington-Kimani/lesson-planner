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

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    admission_number VARCHAR(20) NOT NULL,
    guardian_or_parent_number VARCHAR(20),
    grade VARCHAR(10),
    home_address VARCHAR(255),
    comments TEXT,
    subject_one VARCHAR(50),
    subject_two VARCHAR(50)
);

-- Inserting student 1
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('John Doe', '2023001', '+1234567890', '10', '123 Main St, Cityville', 'Good student', 'Mathematics', 'Science');

-- Inserting student 2
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Jane Smith', '2023002', '+1987654321', '11', '456 Elm St, Townsville', 'Active in sports', 'English', 'History');

-- Inserting student 3
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Michael Johnson', '2023003', '+1654321890', '9', '789 Oak Ave, Villagetown', 'Quiet and studious', 'Physics', 'Chemistry');

-- Inserting student 4
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Sarah Brown', '2023004', '+1888777666', '12', '101 Pine Rd, Hamletville', 'Needs extra help in Math', 'Mathematics', 'French');

-- Inserting student 5
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('David Lee', '2023005', '+1777555444', '8', '321 Cedar Lane, Forest City', 'Enjoys reading', 'Biology', 'Geography');

-- Inserting student 6
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Emily Taylor', '2023006', '+1999444333', '10', '543 Maple Blvd, Riverside', 'Interested in music', 'Music', 'Art');

-- Inserting student 7
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Kevin Garcia', '2023007', '+1888999222', '11', '876 Pinecrest Dr, Hilltop', 'Active participant in debates', 'Social Studies', 'Economics');

-- Inserting student 8
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Amanda Martinez', '2023008', '+1666777888', '9', '654 Birch Ave, Lakeside', 'Needs assistance with writing', 'English', 'Writing');

-- Inserting student 9
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Ryan Wilson', '2023009', '+1444333222', '12', '987 Hill Rd, Mountainview', 'Prefers practical subjects', 'Physics', 'Engineering');

-- Inserting student 10
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Olivia Clark', '2023010', '+1333444555', '8', '210 Valley Ave, Seaside', 'Excels in sports', 'Physical Education', 'Health');

-- Inserting student 11
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Daniel Brown', '2023011', '+1999888777', '9', '432 Hillside Ave, Lakeside', 'Interested in computers', 'Computer Science', 'Mathematics');

-- Inserting student 12
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Sophia Nguyen', '2023012', '+1888999000', '10', '567 Sunset Blvd, Beachtown', 'Artistic talents', 'Art', 'Music');

-- Inserting student 13
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Matthew Rodriguez', '2023013', '+1777666555', '11', '789 Park Lane, Hillcrest', 'Loves history', 'History', 'Social Studies');

-- Inserting student 14
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Isabella Carter', '2023014', '+1666555444', '8', '876 River Rd, Riverdale', 'Enjoys reading fiction', 'English', 'Literature');

-- Inserting student 15
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Ethan Martinez', '2023015', '+1555444333', '12', '543 Oakwood Ave, Woodland', 'Aspiring athlete', 'Physical Education', 'Biology');

-- Inserting student 16
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Mia Adams', '2023016', '+1444333222', '9', '210 Pine St, Pineville', 'Interest in environmental studies', 'Environmental Science', 'Geography');

-- Inserting student 17
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Logan Thompson', '2023017', '+1333222111', '10', '987 Maple Ave, Mapleton', 'Active in community service', 'Civics', 'Psychology');

-- Inserting student 18
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Ava Hernandez', '2023018', '+1222111444', '11', '654 Forest Dr, Forestville', 'Enjoys learning new languages', 'Spanish', 'French');

-- Inserting student 19
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Jackson Wilson', '2023019', '+1111000555', '8', '321 Elmwood Rd, Elmwood', 'Loves astronomy', 'Astronomy', 'Physics');

-- Inserting student 20
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two)
VALUES ('Emma Davis', '2023020', '+1000111222', '12', '123 Cedar Ave, Cedarville', 'Plans to pursue medicine', 'Chemistry', 'Biology');




select * from students;