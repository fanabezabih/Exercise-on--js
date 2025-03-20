
//1. Extract the last four characters  from the string below:"Extravaganza"

let x= "Extravaganza";
let y= x.substring(8);
console.log(y);

//2. Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

let food ="The quick fox jumped over the lazy dog";
let word = food.slice(0,4) + "eat" + food.slice(4);
console.log(word);


//3.Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

let a ="The quick brown fox jumps over the lazy dog";
let b = a.toLowerCase();
let the = b.split("the").length -1;
let brown =b.split("brown").length -1;
console.log(the);
console.log(brown);

//4. Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

let string1 = "The pupils are reading in the library"
let string2 = "The child was sitting on the table before it fell"
let findAre = string1.includes("are");
let findSitting = string2.includes("sitting")? true:false;
console.log(findAre);
console.log(findSitting);

//5. Converting format into specified format
 //  For the UpperCase
 let upperCase = "wonderful".toUpperCase();
 console.log(upperCase);
// 2. For the LowerCase
  let lowerCase1 = "amazing".toLowerCase();
  let lowerCase2 = "UndERneath".toLowerCase();
  console.log(lowerCase1, lowerCase2);
// 3. For the Title case
 let titleCase = "A wonderful world".split(' ')
 .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
 .join(' ');
