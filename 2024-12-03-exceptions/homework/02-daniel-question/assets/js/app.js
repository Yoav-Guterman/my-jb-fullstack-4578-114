"use strict";

(() => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', event => {
        event.preventDefault();
        try {
            const classSize = parseInt(document.getElementById('classSize').value);
            if (isNaN(classSize) || !classSize) throw new Error('Class size must be a valid number');
            if (classSize <= 0 || classSize > 40) throw new Error('Class size must be a number between 1 and 40');

            const students = getInfoFromUser(classSize); // Proceed to gather student info
            console.log(students);

            printClassAverage(students)
            printHighestGradeStudent(students)
            printLowestGradeStudent(students)
            printPassedStudents(students)


        } catch (e) {
            console.log(e.message); // Catch the error here and log the message
        }
    });

    const getInfoFromUser = (classSize) => {
        const students = [];
        for (let i = 0; i < classSize; i++) {
            try {
                const StudentName = prompt(`Please enter student name: \nStudent ${i + 1} out of ${classSize}`);
                if (!StudentName) throw new Error('Student name must be a valid name');

                const StudentGrade = +prompt(`Please enter student grade: \nStudent ${i + 1} out of ${classSize}`);
                if (isNaN(StudentGrade)) throw new Error('Student grade must be a number');
                if (StudentGrade < 0 || StudentGrade > 100) throw new Error('Grade must be a number between 0 and 100');

                students.push({ StudentName, StudentGrade });
            } catch (e) {
                console.log(e.message); // Log error for each student input
                return []; // Optionally, you can stop the input and return an empty array or handle differently
            }
        }
        return students;
    };

    const printClassAverage = students => {
        const sum = students.reduce((acc, { StudentGrade }) => acc + StudentGrade, 0)
        console.log(`class average is: ${sum / students.length}`)
    }

    const printHighestGradeStudent = students => {
        const highest = students.reduce((highest, { StudentGrade }) => StudentGrade > highest ? StudentGrade : highest, 0)
        const highestStudent = students.find(({ StudentGrade }) => StudentGrade === highest)
        console.log(`the student with the highest grade is: ${highestStudent.StudentName} with the grade: ${highestStudent.StudentGrade}`)
    }

    const printLowestGradeStudent = students => {
        const lowest = students.reduce((lowest, { StudentGrade }) => StudentGrade < lowest ? StudentGrade : lowest, Infinity)
        const lowestStudent = students.find(({ StudentGrade }) => StudentGrade === lowest)
        console.log(`the student with the lowest grade is: ${lowestStudent.StudentName} with the grade: ${lowestStudent.StudentGrade}`)
    }

    const printPassedStudents = students => {
        console.log(students.filter(({ StudentGrade }) => StudentGrade > 60))
    }

})();
