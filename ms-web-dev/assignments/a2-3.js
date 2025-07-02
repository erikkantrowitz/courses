//two grading systems 1-5 (3-5 are passing) and A down to F
//read in an array determine if the grade is passing put it in an array called studentsWhoPass
let allStudents = ['A', 'B-', 1, 4, 5, 2, 'C', 1, 4, 'A-'];
let studentsWhoPass = [];

function passingGrades(grades) {
    let passing = [];
    let j = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 3 || grades[i] == 'A' || grades[i] == 'A-' || grades[i] == 'B' || 
            grades[i] == 'B-' || grades[i] == 'C' || grades[i] == 'C-') {
                passing[j] = grades[i];
                j++;
            }
    }
    return passing;
}

function printArray(array) {
    for (let i = 0; i < array.length; i++) console.log(array[i]);
}

studentsWhoPass = passingGrades(allStudents);
printArray(studentsWhoPass);

/* -------------------------------------- */
/* --- refactored based on review ------- */
/* --------- From ChatGPT --------------- */
/* -------------------------------------- */

const allStudents2 = ['A', 'B-', 1, 4, 5, 2, 'C', 1, 4, 'A-'];

function passingGrades(grades) {
    const passingLetters = ['A', 'A-', 'B', 'B-', 'C', 'C-'];
    return grades.filter(grade => {
        return (
            (typeof grade === 'number' && grade >= 3) ||
            (typeof grade === 'string' && passingLetters.includes(grade))
        );
    });
}

const studentsWhoPass2 = passingGrades(allStudents2);
studentsWhoPass.forEach(WebGLTransformFeedback => console.log(grade));