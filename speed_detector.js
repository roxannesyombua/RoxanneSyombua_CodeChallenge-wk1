//Ask the user to input speed
let speed = prompt("Enter the car speed");

// Check if the input is valid
if (isNaN(speed)) {
    console.log("Invalid input. Speed should be a number");

// Alert the user about invalid input
    window.alert("Invalid input. Speed should be a number.");
} else {
    
// Calculate the grade if input is valid
    calculateSpeed();
}


function calculateSpeed() {
// Define speed limit
    let speedLimit = 70;

//Check if speed is within the limit
    if (speed <= speedLimit) {
        window.alert("Ok")
        console.log("Ok");
    } else {
        
 //Calculate demerit points based on speed provided
        let demeritPoints = ((speed - speedLimit) / 5);
        if (demeritPoints <= 12) {
            window.alert(`You have ${demeritPoints} demerit pionts!`);
            console.log(`You have ${demeritPoints} demerit points!`);

// Alert lisence is suspended
        } else {
            window.alert("Lisence Suspended");
            console.log("Lisence Suspended");
        }
    }
}
