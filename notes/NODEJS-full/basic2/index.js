import http from 'http'
import fs from 'fs'


const app = http.createServer((req, res) => {
    
    // lets append teh ip address of the user
    const log = `${Date.now()}: ${req.url} ${req.method} and the ip is ${req.socket.remoteAddress} \n`

    fs.appendFile("log.txt", log, () => {
        res.end("hello from server")
    })
    
})

app.listen(8000, () => {
    console.log("port running on port 8000");
}
)

