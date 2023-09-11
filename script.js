// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
const str1 = "I am a";
const str2 = " Kalvian";
const result = str1 + str2;

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
const giveString = 'If you fail, never give up because FAIL means "First Attempt In Learning".';
console.log(giveString);

// Challenge 3: Store a string in a variable and display the length of the string.
const theString = "Example Sentence";
const length = theString.length;
console.log(length);

// Challenge 4: Store a string in a variable and convert it into uppercase.
const ogString = "this to uppercase";
const uppercaseString = ogString.toUpperCase();
console.log(uppercaseString);


//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
const givenString = "I love programming";
const newString = givenString.replace("programming", "JavaScript programming");
console.log(newString);

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.

const myString = "Print me three times. ";
const repeatedString = myString.repeat(3);
console.log(repeatedString);

//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
const myString1 = "I am a Kalvian";
const theArray = myString1.split(' ');
console.log(theArray);
// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
const inputString = "Time and Tide wait for none";
const indexOfTi = inputString.indexOf("Ti");
console.log(indexOfTi);

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
const inputString2 = "When life gives you lemons make lemonade";
const hasLemon = inputString2.includes("lemon");
console.log(hasLemon);

// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".

