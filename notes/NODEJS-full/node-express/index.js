import express from 'express'

const PORT = 8000

const app = express()

app.get('/', (req, res) => {
    res.send(`hello from server ${PORT}`)
})

app.get('/about/:name', (req, res) => {
    res.send(`hello ${req.params.name}`)
})


app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
})