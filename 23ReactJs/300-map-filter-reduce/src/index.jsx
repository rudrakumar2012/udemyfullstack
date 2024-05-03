//var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//const newNumbers = numbers.map(x => x * 2);


//Filter - Create a new array by keeping the items that return true.


//const newNumbers = numbers.filter(num => num % 2 === 0);

//Reduce - Accumulate a value by doing something to each item in an array.

//const newNumber = numbers.reduce((accumulator, current) => accumulator + current);

//Find - find the first item that matches from an array.

//const newNumber = numbers.find(num => num > 10);

//FindIndex - find the index of the first item that matches.

//const newNumber = numbers.findIndex(num => num > 10);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import emojipedia from "./emojipedia";

emojipedia.map(emoji => 
    console.log(emoji.meaning.substring(0,100))
);