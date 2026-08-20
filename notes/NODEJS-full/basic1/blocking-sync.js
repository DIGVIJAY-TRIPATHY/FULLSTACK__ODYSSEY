import { log } from "console";
import fs from "fs"

console.log("1");
console.log("2");

const result = fs.readFileSync("test.txt", "utf-8")

console.log(result);
console.log("3");
console.log("4");


// output

// 1
// 2
// hey there fs
// 3
// 4