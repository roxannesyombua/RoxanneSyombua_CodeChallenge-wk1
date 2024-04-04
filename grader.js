// Ask the user to input marks
let marks = prompt("Enter student marks between 0-100");

// Check if the input is valid
if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid input. Marks should be between 0 and 100.");

// Alert the user about invalid input
    alert("Invalid input. Marks should be between 0 and 100.");
} else {
    
// Calculate the grade if input is valid
    calculateGrade();
}

//Determine the grade based on the marks
function calculateGrade(){
    
    if (marks >79){
        grade = "A";
        window.alert(`Your grade is an A`)
    }else if (marks >=60 && marks<=79){
        grade = "B";
        window.alert(`Your grade is a B`)
        console.log(`B`)
    }else if (marks >=50 && marks<=59){
        grade = "C"
        window.alert(`Your grade is a C`)
        console.log(`C`)
    }else if (marks >=40 && marks<=49){
        grade = "D"
        window.alert(`Your grade is a D`)
        console.log(`D`)
    }else {
        grade ="E"
        window.alert(`Your grade is an E`)
        console.log(`E`)
    }
}
