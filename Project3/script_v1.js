
function getGrade(student){
    if(student?.mark != null){
        if(student.mark >= 75){
            console.log('Your grade is A');
        }else if(student.mark >= 65){
            console.log('Your grade is B');
        }else if(student.mark >= 55){
            console.log('Your grade is C');
        }else{
            console.log('Your grade is D');
        }
    }else{
        console.log('You are not a student');
    }
}

const s1 = {
    mark: 75,
}

getGrade(s1);