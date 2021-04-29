'use strict';

/* Define a function `addFour()` that takes a single argument 
   and returns a value 4 greater than the input.*/
function addFour(num) {
	return num + 4;
}

/* Create and log a variable `twelve` that is the result of passing 8 to your
   addFour() function. */
let twelve = addFour(8);
console.log(twelve);
   
/* Create and log a variable `twelveString` that is the result of passing "8" 
   (a string) to your addFour() function. Consider what this tells you about how
  the function should be explained (e.g., in a comment). */
let twelveString = addFour('8');
// Adds the value 4 to the end of the passed string '8', which produces "84"
console.log(twelveString);
  

/* Define a function `compoundInterest()` that takes three parameters: 
     1. an initial bank balance (principle, in dollars)
     2. an annual interest rate (as a decimal, e.g., 0.01) 
     3. a number of years
   The function should calculate the continuous compound interest
     (https://en.wikipedia.org/wiki/Compound_interest#Continuous_compounding) 
   and *return* the resulting total balance after that many number of years

   You can call the method and log the result to check your work. Compare to
     http://www.mathwarehouse.com/calculators/continuous-compound-interest-calculator.php
*/
function compoundInterest(balance, rate, years) {
	balance *= Math.pow(Math.E, rate * years);
	return Math.round(balance * 100) / 100;
}

console.log(compoundInterest(1000, .01, 10));


/* Define a function `fizzBuzz()` that takes in a single number as an argument.
   The function should *return* an _array_ of numbers from 1 to the argument. 
   But for multiples of three, the array should contain "Fizz" instead of the 
   number. For multiples of five, the array should contain "Buzz" instead of the 
   number. For numbers which are multiples of both three and five, the array 
   should contain "FizzBuzz" instead of the number.
   The returned array should be empty for arguments less than 1. */
function fizzBuzz(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			arr.push('FizzBuzz');
		} else if (i % 3 == 0) {
			arr.push('Fizz');
		} else if (i % 5 == 0) {
			arr.push('Buzz');
		} else {
			arr.push(i);
		}
	}
	return arr;
}

console.log(fizzBuzz(20));
   

/* Define a function `getLetterFrequencies()` that takes in a single string as 
   an argument. The function should *return* an Object whose keys are characters
   (letters) and whose values are the number of times that character appears in
   the argument. Your function should be case sensitive.
   _Hint:_ start with an empty Object, then loop through the letters one at a
   time (you can access them with bracket notation, like with an array). For 
   each letter, increase the value associated with that key by one. Watch out 
   for if the letter is not in the Object yet!
   You can test this method with a word like "Mississippi". */
function getLetterFrequencies(str) {
	let obj = {};
	str = str.toLowerCase();
	for (let i = 0; i < str.length; i++) {
		var letter = str.charAt(i);
		if (!(obj.hasOwnProperty(letter))) {
			obj[letter] = 1;
		} else {
			obj[letter]++;
		}
	}
	return obj;
}
console.log(getLetterFrequencies("Mississippi"));

/* Create a variable `deck` that represents a deck of modern playing cards
   (https://en.wikipedia.org/wiki/Playing_card). This variable should be an
   *array* of 52 elements, each of which is an Object with properties:
     - `suit`, with a string value that is either `"hearts"`, `"diamonds"`, 
       `"clubs"`, or `"spades"`
     - `rank`, with an integer value ranging from 2 to 14 inclusive (values 
        11-14 represent a Jack, Queen, King, or Ace respectively).
    Tip: use a pair of nested loops to add each combination of suit and rank to 
    the `deck` array! 
    
    You can log out the `deck` to check your work! */
var deck = new Array();

let suit = ["hearts", "diamonds", "clubs", "spades"];
let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
for (let i = 0; i < suit.length; i++) {
	for (let j = 0; j < rank.length; j++) {
		var card = {rank: rank[j], suit: suit[i]};
		deck.push(card);
	}
}
console.log(deck);

//You can test the below functions by creating e.g., a `pokerHand` array that 
//contains five cards from the `deck`.
var pokerHand = new Array();
for (let i = 0; i < 5; i++) {
	var randCards = deck[Math.floor(Math.random() * 52)];
	pokerHand.push(randCards);
}
console.log(pokerHand);

/* Define a function `containsQueenOfHearts()` that takes in an array of "card"
   objects (e.g., a Poker hand) and returns whether or not the Queen of Hearts
   is in that array.
   Hint: use a loop to check each card. */
function containsQueenOfHearts(card) {
	for (let i = 0; i < card.length; i++) {
		if (card[i].rank == 12) {
			return true;
		}
	}
	return false;
}
console.log(containsQueenOfHearts(pokerHand));
   

/* Define a function `getHighCard()` that takes in an array of "card" objects
  and returns the card object with the highest value. The "high card" is the one
  with the highest rank. Cards of different suits but the same rank are 
  considered to have the same value, and either is a valid result */
function getHighCard(card) {
	var max = card[0];
	for (let i = 0; i < card.length; i++) {
		if (card[i].rank > max.rank) {
			max = card[i];
		}
	}
	return max;
}
console.log(getHighCard(pokerHand));
  

/* Define a function `isFlush()` that takes in an array of "card" objects and
   returns whether or not the cards all have the same _suit_. */
// var flushin = new Array();
// for (let i = 0; i < 5; i++) {
// 	var card = deck[i];
// 	flushin.push(card);
// }
// console.log(flushin);
function isFlush(card) {
	var suitType = card[0].suit;
	for (let i = 0; i < card.length; i++) {
		if (card[i].suit != suitType) {
			return false;
		}
	}
	return true;
}

/* Extra challenge: define a function `hasPair()` that takes in an array of 
   "card" objects and returns whether or not there is at least one _pair_ (two 
   cards with the same _rank_) in the array.
   Double challenge: return the rank of the pair of cards with the highest rank 
   (e.g., if the hand contains more than one pair!) */



//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof addFour !== 'undefined') 
    module.exports.addFour = addFour;
  if(typeof twelveString !== 'undefined') 
    module.exports.twelveString = twelveString;
  if(typeof compoundInterest !== 'undefined') 
    module.exports.compoundInterest = compoundInterest;
  if(typeof fizzBuzz !== 'undefined') 
    module.exports.fizzBuzz = fizzBuzz;
  if(typeof getLetterFrequencies !== 'undefined')
    module.exports.getLetterFrequencies = getLetterFrequencies;
  if(typeof deck !== 'undefined')
    module.exports.deck = deck;
  if(typeof containsQueenOfHearts !== 'undefined')
    module.exports.containsQueenOfHearts = containsQueenOfHearts;
  if(typeof getHighCard !== 'undefined')
    module.exports.getHighCard = getHighCard;
  if(typeof isFlush !== 'undefined')
    module.exports.isFlush = isFlush;
}