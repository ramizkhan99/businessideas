const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../public')))
app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'hbs')

app.get('/question', (req, res) => {
    res.render('question')
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})