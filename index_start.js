// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
//function reverseString(str) {
//   let string = str
//     .split("")
//     .reverse()
//     .join();

//   return string;

//   let revStr = "";
//   for (let char of str) {
//     revStr = char + revStr;
//   }
//   return revStr;

//   let revStr = "";
//   str.split("").forEach(char => (revStr = char + revStr));
//   return revStr;

// return str.split("").reduce((revStr, char) => char + revStr, "");
//}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// function isPalindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] == str[str.length - 1 - i]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// function reverseInt(int) {
//   let numToString = int.toString();

//   numToString = numToString
//     .split("")
//     .reverse()
//     .join("");

//   numToString = Number(numToString);

//   return numToString;
// }

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
// function capitalizeLetters(str) {
//   let strToCaps = str.split(" ");

//   strToCaps = strToCaps.map(
//     item => item.charAt(0).toUpperCase() + item.slice(1)
//   );
//   strToCaps = strToCaps.join(" ");

//   return strToCaps;
// }

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach(function(char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// function fizzBuzz() {
//   let num = 0;
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 != 0 && i % 5 != 0) {
//       num = i;
//     }
//     if (i % 3 == 0) {
//       num = "Fizz";
//     }
//     if (i % 5 == 0) {
//       num = "Buzz";
//     }
//     if (i % 3 == 0 && i % 5 == 0) {
//       num = "FizzBuzz";
//     }
//     console.log(num);
//   }
// }

// Call Function
let output = maxCharacter("javascript");

console.log(output);
