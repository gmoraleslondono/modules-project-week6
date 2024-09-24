import {
  reverseString,
  countCharacters,
  countCharactersIgnoreSpaces,
  addCuteEmoji,
} from "./stringUtils";
import fs from "fs";
import path from "path";

const myString: string =
  "Learning Node.js is essential for becoming a full-stack developer. I want to master Node.js to build APIs with TypeScript";

console.log(reverseString(myString));

console.log(countCharacters(myString));

console.log(countCharactersIgnoreSpaces(myString));

console.log(addCuteEmoji(myString));

const reversedSentence: string = reverseString(myString);
fs.writeFileSync("reversed.txt", reversedSentence);
console.log('Reversed sentence written in "reversed.txt" file');

const reversedSentencePath: string = path.join(__dirname, "reversed.txt");
console.log("File created at: ", reversedSentencePath);
