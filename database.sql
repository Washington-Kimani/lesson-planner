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




-- Inserting student 1
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('John Doe', '2023001', '+1234567890', '10', '123 Main St, Cityville', 'Good student', 'Mathematics', 'Science',3);

-- Inserting student 2
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Jane Smith', '2023002', '+1987654321', '11', '456 Elm St, Townsville', 'Active in sports', 'English', 'History',3);

-- Inserting student 3
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Michael Johnson', '2023003', '+1654321890', '9', '789 Oak Ave, Villagetown', 'Quiet and studious', 'Physics', 'Chemistry',3);

-- Inserting student 4
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Sarah Brown', '2023004', '+1888777666', '12', '101 Pine Rd, Hamletville', 'Needs extra help in Math', 'Mathematics', 'French',5);

-- Inserting student 5
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('David Lee', '2023005', '+1777555444', '8', '321 Cedar Lane, Forest City', 'Enjoys reading', 'Biology', 'Geography',4);

-- Inserting student 6
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Emily Taylor', '2023006', '+1999444333', '10', '543 Maple Blvd, Riverside', 'Interested in music', 'Music', 'Art',4);

-- Inserting student 7
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Kevin Garcia', '2023007', '+1888999222', '11', '876 Pinecrest Dr, Hilltop', 'Active participant in debates', 'Social Studies', 'Economics',3);

-- Inserting student 8
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Amanda Martinez', '2023008', '+1666777888', '9', '654 Birch Ave, Lakeside', 'Needs assistance with writing', 'English', 'Writing',4);

-- Inserting student 9
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Ryan Wilson', '2023009', '+1444333222', '12', '987 Hill Rd, Mountainview', 'Prefers practical subjects', 'Physics', 'Engineering',3);

-- Inserting student 10
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Olivia Clark', '2023010', '+1333444555', '8', '210 Valley Ave, Seaside', 'Excels in sports', 'Physical Education', 'Health',4);

-- Inserting student 11
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Daniel Brown', '2023011', '+1999888777', '9', '432 Hillside Ave, Lakeside', 'Interested in computers', 'Computer Science', 'Mathematics',3);

-- Inserting student 12
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Sophia Nguyen', '2023012', '+1888999000', '10', '567 Sunset Blvd, Beachtown', 'Artistic talents', 'Art', 'Music',5);

-- Inserting student 13
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Matthew Rodriguez', '2023013', '+1777666555', '11', '789 Park Lane, Hillcrest', 'Loves history', 'History', 'Social Studies',5);

-- Inserting student 14
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Isabella Carter', '2023014', '+1666555444', '8', '876 River Rd, Riverdale', 'Enjoys reading fiction', 'English', 'Literature',5);

-- Inserting student 15
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Ethan Martinez', '2023015', '+1555444333', '12', '543 Oakwood Ave, Woodland', 'Aspiring athlete', 'Physical Education', 'Biology',3);

-- Inserting student 16
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Mia Adams', '2023016', '+1444333222', '9', '210 Pine St, Pineville', 'Interest in environmental studies', 'Environmental Science', 'Geography',4);

-- Inserting student 17
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Logan Thompson', '2023017', '+1333222111', '10', '987 Maple Ave, Mapleton', 'Active in community service', 'Civics', 'Psychology', 3);

-- Inserting student 18
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Ava Hernandez', '2023018', '+1222111444', '11', '654 Forest Dr, Forestville', 'Enjoys learning new languages', 'Spanish', 'French',4);

-- Inserting student 19
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Jackson Wilson', '2023019', '+1111000555', '8', '321 Elmwood Rd, Elmwood', 'Loves astronomy', 'Astronomy', 'Physics', 4);

-- Inserting student 20
INSERT INTO students (full_name, admission_number, guardian_or_parent_number, grade, home_address, comments, subject_one, subject_two, teacher_id)
VALUES ('Emma Davis', '2023020', '+1000111222', '12', '123 Cedar Ave, Cedarville', 'Plans to pursue medicine', 'Chemistry', 'Biology', 3);




INSERT INTO lesson_plans (teacher_id, term, subject, topic, week, lesson_title, grade_level, date, objectives, standards, materials_needed, teaching_method, instructional_procedures, assessment, homework, feedback, adjustment)
VALUES (3, 'Spring 2024', 'Mathematics', 'Geometry', 3, 'Introduction to Angles', 'Grade 5', '2024-04-15', '1. Understand the concept of angles.', 'CCSS.MATH.CONTENT.5.G.B.4', 'Protractor, paper, pencils', 'Direct Instruction', '1. Introduce basic types of angles.\n2. Practice measuring angles with protractor.', 'Quiz on types of angles', 'Practice worksheet on angle measurement', 'Positive reinforcement for effort and accuracy', 'Modify lesson pacing as needed.');

INSERT INTO lesson_plans (teacher_id, term, subject, topic, week, lesson_title, grade_level, date, objectives, standards, materials_needed, teaching_method, instructional_procedures, assessment, homework, feedback, adjustment)
VALUES (4, 'Fall 2024', 'Science', 'Chemistry', 7, 'Chemical Reactions', 'Grade 8', '2024-10-22', '1. Identify different types of chemical reactions.', 'NGSS.MS-PS1-2', 'Safety goggles, test tubes, chemicals', 'Demonstration', '1. Discuss types of chemical reactions (synthesis, decomposition, etc).\n2. Perform experiments to demonstrate reactions.', 'Lab report on reaction types', 'Research on real-world applications of chemical reactions', 'Encouragement to follow safety procedures', 'Adjust experiment setup for better clarity.');


INSERT INTO lesson_plans (teacher_id, term, subject, topic, week, lesson_title, grade_level, date, objectives, standards, materials_needed, teaching_method, instructional_procedures, assessment, homework, feedback, adjustment)
VALUES (5, 'Spring 2024', 'English Language Arts', 'Poetry', 5, 'Analyzing Sonnets', 'Grade 9', '2024-05-08', '1. Analyze the structure and themes of sonnets.', 'CCSS.ELA-LITERACY.RL.9-10.5', 'Sonnets by Shakespeare, paper, pens', 'Group Discussion', '1. Introduction to sonnet structure and history.\n2. Analyze selected sonnets for themes and poetic devices.', 'Written analysis on sonnet themes', 'Write a modern sonnet as homework', 'Constructive feedback on literary analysis', 'Modify discussion questions based on student responses.');


INSERT INTO lesson_plans (teacher_id, term, subject, topic, week, lesson_title, grade_level, date, objectives, standards, materials_needed, teaching_method, instructional_procedures, assessment, homework, feedback, adjustment)
VALUES (3, 'Fall 2024', 'Social Studies', 'World History', 4, 'Ancient Civilizations: Mesopotamia', 'Grade 7', '2024-09-18', '1. Understand the contributions of Mesopotamian civilizations.', 'CCSS.ELA-LITERACY.RH.6-8.2', 'Textbooks, maps, images', 'Lecture and Discussion', '1. Discuss geography and early settlements in Mesopotamia.\n2. Explore achievements in architecture, writing, and governance.', 'Quiz on Mesopotamian civilizations', 'Research on other ancient civilizations', 'Encouragement to participate in discussions', 'Adjust discussion pace based on student engagement.');


INSERT INTO lesson_plans (teacher_id, term, subject, topic, week, lesson_title, grade_level, date, objectives, standards, materials_needed, teaching_method, instructional_procedures, assessment, homework, feedback, adjustment)
VALUES (4, 'Spring 2024', 'Mathematics', 'Algebra', 9, 'Linear Equations', 'Grade 8', '2024-05-28', '1. Solve linear equations with one variable.', 'CCSS.MATH.CONTENT.8.EE.C.7', 'Whiteboard, markers, worksheets', 'Problem-Based Learning', '1. Introduce solving equations by isolating the variable.\n2. Practice solving equations through examples and exercises.', 'Problem-solving quiz on linear equations', 'Additional problems on linear equations', 'Constructive feedback on problem-solving strategies', 'Modify examples for better comprehension.');


INSERT INTO lesson_plans (teacher_id, term, subject, topic, week, lesson_title, grade_level, date, objectives, standards, materials_needed, teaching_method, instructional_procedures, assessment, homework, feedback, adjustment)
VALUES (5, 'Fall 2024', 'Science', 'Biology', 6, 'Cell Structure and Function', 'Grade 10', '2024-10-10', '1. Understand the structure and function of cells.', 'NGSS.HS-LS1-2', 'Microscopes, prepared slides, diagrams', 'Hands-On Lab', '1. Review cell theory and basic structure.\n2. Observe different types of cells under the microscope and discuss their functions.', 'Lab report on cell structure', 'Research on recent discoveries in cell biology', 'Encouragement to explore different cell types', 'Adjust microscope settings for better clarity.');


INSERT INTO lesson_plans (teacher_id, term, subject, topic, week, lesson_title, grade_level, date, objectives, standards, materials_needed, teaching_method, instructional_procedures, assessment, homework, feedback, adjustment)
VALUES (3, 'Spring 2024', 'Art', 'Drawing', 2, 'Introduction to Perspective Drawing', 'Grade 6', '2024-02-12', '1. Learn the basics of perspective drawing techniques.', 'National Core Arts Standards', 'Drawing paper, pencils, rulers', 'Demonstration and Practice', '1. Explain one-point and two-point perspective.\n2. Demonstrate techniques for drawing depth and distance.', 'Portfolio assessment of perspective drawings', 'Practice drawing exercises on perspective', 'Positive feedback on creativity', 'Adjust demonstration pace based on student progress.');


INSERT INTO lesson_plans (teacher_id, term, subject, topic, week, lesson_title, grade_level, date, objectives, standards, materials_needed, teaching_method, instructional_procedures, assessment, homework, feedback, adjustment)
VALUES (4, 'Fall 2024', 'English Language Arts', 'Literature', 8, 'Analyzing Short Stories', 'Grade 9', '2024-11-05', '1. Analyze literary elements in short stories.', 'CCSS.ELA-LITERACY.RL.9-10.1', 'Short stories, laptops, pens', 'Small Group Discussion', '1. Discuss plot, characterization, and themes in selected short stories.\n2. Analyze the impact of literary devices on the narrative.', 'Written analysis on short story themes', 'Write a short story as homework', 'Constructive feedback on literary analysis', 'Adjust discussion groups for better interaction.');


INSERT INTO lesson_plans (teacher_id, term, subject, topic, week, lesson_title, grade_level, date, objectives, standards, materials_needed, teaching_method, instructional_procedures, assessment, homework, feedback, adjustment)
VALUES (5, 'Spring 2024', 'History', 'U.S. History', 11, 'The Civil Rights Movement', 'Grade 11', '2024-06-18', '1. Examine key events and figures in the Civil Rights Movement.', 'CCSS.ELA-LITERACY.RH.11-12.7', 'Documentaries, textbooks, primary sources', 'Documentary Screening', '1. Watch documentaries on the Civil Rights Movement.\n2. Discuss the impact of key events and leaders.', 'Essay on the impact of the Civil Rights Movement', 'Research on current civil rights issues', 'Encouragement to reflect on documentary themes', 'Adjust documentary selection based on student interest.');


INSERT INTO lesson_plans (teacher_id, term, subject, topic, week, lesson_title, grade_level, date, objectives, standards, materials_needed, teaching_method, instructional_procedures, assessment, homework, feedback, adjustment)
VALUES (3, 'Fall 2024', 'Mathematics', 'Statistics', 6, 'Introduction to Data Analysis', 'Grade 7', '2024-10-02', '1. Understand basic concepts of data analysis and statistics.', 'CCSS.MATH.CONTENT.7.SP.A.1', 'Graph paper, calculators, survey data', 'Interactive Lecture', '1. Introduce types of data and methods of data collection.\n2. Analyze survey results and create graphs.', 'Quiz on data analysis concepts', 'Practice creating graphs from data', 'Positive reinforcement for participation', 'Adjust lecture pace based on student comprehension.');



select * from students;