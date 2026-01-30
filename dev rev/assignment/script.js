let searchQuery = "Learn JavaScript Functions Arrow IIFE";
let cleanedQuery = searchQuery.trim();

console.log("CLeaned String:", cleanedQuery);
console.log("length:", cleanedQuery.length);

let lowerCaseQuery = cleanedQuery.toLowerCase();
console.log("Lowercase String:", lowerCaseQuery);

let upperCaseQuery = cleanedQuery.toUpperCase();
console.log("Uppercase String:", upperCaseQuery);

let jsUsingSubstring = cleanedQuery.substring(6, 13);
console.log("JavaScript Substring:", jsUsingSubstring);

let jsUsingSlice = cleanedQuery.slice(6, 16);
console.log("JavaScript Substring:", jsUsingSlice);

console.log("Contains 'functions':", lowerCaseQuery.includes("functions"));
console.log("Contains 'arrow':", lowerCaseQuery.includes("arrow"));
console.log("Contains 'iife':", lowerCaseQuery.includes("iife"));

let charAtIndex6 = cleanedQuery.charAt(6);
let asciiValue = cleanedQuery.charCodeAt(0);

console.log("Character at index 6:", charAtIndex6);
console.log("ASCII of first character:", asciiValue);

let containsJavaScript =
  cleanedQuery.toLowerCase().includes("javascript");

console.log("Contains 'javascript' (case-insensitive):", containsJavaScript);



