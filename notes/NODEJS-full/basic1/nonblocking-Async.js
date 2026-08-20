import { log } from "console";
import fs from "fs"

console.log("1");
console.log("2");

fs.readFile("test.txt", "utf-8", (err,result)=>{
    console.log(result);
})

console.log("3");
console.log("4");


// output
// 1
// 2
// 3
// 4
// hey there fs