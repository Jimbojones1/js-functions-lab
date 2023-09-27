console.log('app.js is loading')


// defining a function
// declaring a function
// creating the reusable block of code 
// to be used at a later time in the program
function sayHello(personsName){
	// write the code to say hello here
	console.log(`Hello ${personsName}`)
}

// execute the function
// invoke the function 
// call the function 

// write the functions name ()
sayHello('Shavon'); // runs the block code defined by the sayHello func
sayHello('Megan');
sayHello("Ed");
sayHello('Augusta');


function sayGoodbye(phrase, personsName){
	console.log(`${phrase}, ${personsName}`)

}

sayGoodbye('Chao', 'Laura')

// Define and call the function
// sayGoodBye should accept two paramters, one phrase, and on personsName
// add it logs a message
// Adios, Laura
// Chao, Becky
// Goodbye, Chad
// Peace, Frankie


function add(x, y){
	const sum = x + y
	console.log(sum)
	return sum
	// return x + y // return produces a value for the function when its is called
}

console.log(add(2, 2), " <_ _________ LOOK AT THIS")


function getPlayerUserName(username){
	return username.toUpperCase()
}

// before the game we don't know the players name
let playerOne;
let playerTwo;
let playerThree;
let playerFour;


// after they join the game we want to set the players name
playerOne = getPlayerUserName('Luke')  // == > 'Luke'
playerTwo = getPlayerUserName('Laura') /// == > 'Laura
playerThree = getPlayerUserName('kate')
playerFour = getPlayerUserName('Kevin')