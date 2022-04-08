function getGrade(student){
    if(student?.mark == null){
        console.log('You are not a student');
        return 
    }
    let result = 'Your grade is D';
    if(student.mark >= 75){
       result = 'Your grade is A';
    }else if(student.mark >= 65){
        result = 'Your grade is B';
    }else if(student.mark >= 55){
        result = 'Your grade is C';
    }
    
    console.log(result);
    return
    
}

const s2 = {
    mark: 58,
}

getGrade(s1);