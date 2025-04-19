const fs = require('fs')
// const http = require('http')
// const path = require('path')
// const os = require('os')
// const url = require('url')
// const crypto = require('crypto')
const sayHello = require('./greeting')
const math = require('./math')
const lodash = require('lodash')

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

/* creating demo http server*/

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')  
//   res.end('Hello World')
// })

// server.listen(3000, () => {
//     console.log("server running at http://localhost:3000");
// })

/*path module*/

// const directory = '/user/local'
// const fileName = 'example.txt'

// const fullPath = path.join(directory,fileName)

// console.log(fullPath);

/*OS module*/

/*
console.log("Platform: ", os.platform());
console.log("CPU Architecture: ", os.arch());
console.log("CPU Cores: ", os.cpus().length);
console.log("Free Memory: ", os.freemem() / 1024 / 1024, "MB");
console.log("Total Memory: ", os.totalmem() / 1024 / 1024, "MB");
*/

/*URL MODULE*/

/*
const myUrl = new URL('https://example.com:8080/path/name?query=hello#hash')
console.log('Host',myUrl.host);
console.log('Pathname',myUrl.pathname);
console.log('Search Params',myUrl.searchParams.get('query'));
*/

/*
const hash = crypto.createHash('sha256')
hash.update("Hello World")
console.log(hash.digest('hex'));
*/

// const message = sayHello('Developers')

// console.log(message);


// console.log(math.add(5, 10));
// console.log(math.subtract(10, 5));

// const numbers = [1,2,3,4,5]
// const reversed = lodash.reverse(numbers)

// console.log(reversed);

// const readableStream = fs.createReadStream('example.txt',{encoding:'utf-8'})

// readableStream.on('data',(chunk)=>{
//     console.log(chunk);
// })

// readableStream.on('end',()=>{
//     console.log("finish reading the file");
// })

// readableStream.on('error',(err)=>{
//     console.error('error',err);
// })

/*
const writableStream = fs.createWriteStream('output2.txt')

writableStream.write('Hello ')
writableStream.write('World')
writableStream.end('!')
writableStream.on('finish',()=>{
    console.log("finished writing to file");
})
*/

const readableStream = fs.createReadStream('example.txt',{encoding:'utf-8'})


const writableStream = fs.createWriteStream('example-output.txt')

readableStream.pipe(writableStream)

writableStream.on('finish',()=>{
    console.log("finished writing to file");
    
})