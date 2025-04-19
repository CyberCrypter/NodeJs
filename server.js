const http =  require('http')
const url = require('url')


//routes handler

const routes = {
    '/':(req,res) =>{
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('Welcome to the home page')
    },
    '/about':(req,res) =>{
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('Welcome to the About page')
    },
    '/notfound':(req,res) =>{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('page not found')
    }
}
const server = http.createServer((req,res)=>{
    const {pathname}=  url.parse(req.url)
    if(routes[pathname]){
        routes[pathname](req,res)
    }
    else{
        routes['/notfound'](req,res)
    }
})

const PORT = 3000

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})