const fs = require('fs')
const http = require('http')
/*read file from file system*/

// fs.readFile('example.txt','utf-8',(err,data)=>{
//     if (err) {
//         console.error(error);
//         return;
//     }
//     console.log(data);
// })

/*write file to file system*/

// const content = "Hello NodeJS";

// fs.writeFile('output.txt',content,(err)=>{
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("file written successfully");
// })

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')  
  res.end('Hello World')
})

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
})