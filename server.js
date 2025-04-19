const http =  require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    if(req.method === 'GET' && req.url.startsWith('/search')){
        
        const queryObject = url.parse(req.url, true).query

        res.writeHead(200,{'content-type':'application/json',
                            "custom-header":"node JS server",
                            "custom-tracking":"1234"})
        res.end(JSON.stringify({message:"Query received",queryObject}))
    }else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('Route Not Found')
    }
})

const PORT = 3000

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})