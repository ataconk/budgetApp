const express = require('express')
const path = require('path')
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000; // if there is env file, reads from there otherwise 3000

const app = express()
app.use(express.static(publicPath)) // use publoc dir to serve static assets

app.get('*', (req,res)=> {
    res.sendFile(path.join(publicPath,'index.html')) // if it's not in public folder, serve index.html
})
// above is same thing as in webpack.config

app.listen(port, () => {
    console.log('Server is up!')
})