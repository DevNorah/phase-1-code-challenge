function Grader() {
    let name = prompt ("Enter Students name:");
    let grade = prompt ("Enter grade:");
    
    if(isNaN(grade)){
        alert (`Please enter a valid number`);
    }


    if (grade > 79) {
        grade = "A"
    } else if (grade >= 60 && grade < 79){
        grade = "B"
    } else if (grade > 49 && grade <= 59){
        grade = "C"
    } else if (grade > 40 && grade <= 49){
        grade = "D"
    } else {
        grade = "E"
    
    }
    alert(`${name}, your grade is ${grade}`);
}

