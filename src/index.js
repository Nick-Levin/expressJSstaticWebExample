const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/api/v1/:cid', (req, res) => {
    console.log(req.params.cid)
    console.log(req.query.start)
    console.log(req.query.end)

    // TODO: make a req to CW
    // TODO: analyze the incoming data
    // TODO: construct a response object according to fetched data from CW
    res.send('{"msg":"works"}')
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})