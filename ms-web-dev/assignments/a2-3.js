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