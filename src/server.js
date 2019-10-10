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
app.get('/mergerinit', (req, res) => {
    
    res.render('mergerinit')
})

app.get('/merger', (req, res) => {
    
    res.render('merger')
})
app.get('/quiz',(req,res)=>{
	res.render('quiz')
})


// samsung routes
app.get('/samsungsal',(req,res)=>{
	res.render('samsungSales')
})

// DLF routes
app.get('/dlfsal',(req,res)=>{
	res.render('samsungSales')//SHOULD BE EDITED
})

// ola routes
app.get('/olasal',(req,res)=>{
	res.render('olaSales')
})

// Indianoil routes
app.get('/indianoilssal',(req,res)=>{
	res.render('indianoilsSales')
})

// Mahindra Route
app.get('/mahindrasal',(req,res)=>{
	res.render('mahindraSales')
})
app.get('/mahindrafin',(req,res)=>{
    res.render('mahindraFin')
})
app.get('/mahindrapro',(req,res)=>{
    res.render('mahindraPro')
})
app.get('/mahindrarnd',(req,res)=>{
    res.render('mahindraRnd')
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
app.get('/login', (req, res) => {
    res.render('login')
    
})
app.get('/info', (req, res) => {
    res.render('description')
    
})