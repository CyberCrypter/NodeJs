const fs = require('fs')
// fs.readFile('example.txt','utf-8',(err,data)=>{
//     if (err) {
//         console.error(error);
//         return;
//     }
//     console.log(data);
// })

const content = "Hello NodeJS";

fs.writeFile('output.txt',content,(err)=>{
    if (err) {
        console.error(err);
        return;
    }
    console.log("file written successfully");
    
})