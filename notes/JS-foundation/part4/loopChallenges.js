/******************************************************
 * 1. WHILE LOOP
 * Find the sum of numbers from 1 to 5.
 *
 * Best Use:
 * - When you DON'T know exactly how many times
 *   the loop will execute.
 ******************************************************/

let sum = 0;
let number = 1;

while (number <= 5) {
    sum += number;
    number++;
}

console.log("Sum =", sum);



/******************************************************
 * 2. WHILE LOOP
 * Store countdown numbers from 5 to 1.
 ******************************************************/

let countdown = [];
let count = 5;

while (count >= 1) {
    countdown.push(count);
    count--;
}

console.log("Countdown =", countdown);



/******************************************************
 * 3. DO...WHILE LOOP
 *
 * Keeps asking the user for their favorite tea
 * until they type "stop".
 *
 * Best Use:
 * When the loop MUST execute at least once.
 ******************************************************/

let teaCollection = [];
let tea;

// Uncomment in browser

/*
do {
    tea = prompt("Enter your favorite tea (type 'stop' to finish)");

    if (tea !== "stop") {
        teaCollection.push(tea);
    }

} while (tea !== "stop");

console.log(teaCollection);
*/



/******************************************************
 * 4. DO...WHILE LOOP
 * Add numbers from 1 to 3.
 ******************************************************/

let total = 0;
let currentNumber = 1;

do {
    total += currentNumber;
    currentNumber++;

} while (currentNumber <= 3);

console.log("Total =", total);



/******************************************************
 * 5. FOR LOOP
 * Multiply every number by 2.
 *
 * Best Use:
 * When the number of iterations is known.
 ******************************************************/

const numbers = [2, 4, 6];
const multipliedNumbers = [];

for (let index = 0; index < numbers.length; index++) {
    multipliedNumbers.push(numbers[index] * 2);
}

console.log(multipliedNumbers);



/******************************************************
 * 6. FOR LOOP
 * Copy all cities into another array.
 ******************************************************/

const cities = ["Paris", "New York", "Tokyo", "London"];
const cityList = [];

for (let index = 0; index < cities.length; index++) {
    cityList.push(cities[index]);
}

console.log(cityList);