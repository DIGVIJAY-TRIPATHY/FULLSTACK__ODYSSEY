import fs from "fs"

// snchronous returns but async not


//synchronous call     blocking....
// fs.writeFileSync('./test.txt', "hey there")

// Asynchronous   non-blocking....
// fs.writeFile('./test.txt', "hey there fs",(err)=>{})


console.log(fs.readFileSync('./file.js', 'utf-8'));

fs.mkdirSync("new-file/a/b", {recursive: true})