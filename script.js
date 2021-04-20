const paintWall = function(paintLocation, paintColor){ // de volgorde hiervan is belangrijk, anders draait hij het om. 
    console.log("The " + paintLocation + " has been painted " + paintColor)
};

const wall = "kitchen";
const color = "red";
paintWall(wall, color);

/* bij alleen 1 argument
paintWall("red");
paintWall("green"); */





/* TUTORIAL:

// VOORBEELD FUNCTION ARGUMENT STRING:
const heat = function(item) {
    console.log("I'm heating " + item);
    // lot of code
    // lot of code
    // lot of code 
    console.log("Ping! Your " + item + " is heated.")
};

const main_course = "pasta";
const dessert = "cake"

heat("popcorn"); // passing an argument to a funciton 
heat("milk");
heat (main_course); // je kunt dus ipv een string ook een variable naar de function sturen. 
heat (dessert);

// VOORBEELD FUNCTION ARGUMENT NUMBER:
const multiply = function(numberA, numberB) { // voorbeeld multiple arguments
    console.log(numberA * numberB);
};

multiply (3, 4); // voorbeeld multiple arguments 

const age = 5;
const dogYearsFactor = 7;
multiply(age, dogYearsFactor);

// VOORBEELD ARRAY IN EEN FUNCTION:

// calculate average
const calculateAverage = function(numbers) { // tussen de haakjes zet je numbers ipv grades omdat je die functie misschien ook voor andere dingen dan grades gebruikt. 
    const average = numbers.reduce((total, n) => total + n) / numbers.length; // advanced code. Hoef ik nog niet te weten. 
    console.log(average);

};

const grades = [6,7,8,9,5,6,7,8,];
calculateAverage(grades);

*/