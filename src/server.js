const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3001
let selectedCompany

app.use(express.static(path.join(__dirname, '../public')))
app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'hbs')
app.get('/',(req,res)=>{
    res.redirect('/login')
})

app.get('/question', (req, res) => {
    res.render('question')
    
})
app.get('/companies', (req, res) => {
    
    res.render('companies')
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
app.get('/login', (req, res) => {
    res.render('login')
    
})