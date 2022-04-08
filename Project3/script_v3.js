function getGrade(student){
    if(student?.mark == null){
        console.log('You are not a student');
        return 
    }
    let result = getGradeResponse(student.mark);
    console.log(result);
    return
}

function getGradeResponse(mark){
    if(mark >= 75) return 'Your grade is A';
    if(mark >= 65) return 'Your grade is B';
    if(mark >= 55) return 'Your grade is C';
    return 'Your grade is D';
}

const s3 = {
    mark: 58,
}

getGrade(s1);