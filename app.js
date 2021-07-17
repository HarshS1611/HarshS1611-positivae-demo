// imports
//const bodyParser = require('body-parser')
const express = require ('express')
//const nodemailer = require('nodemailer')
const app = express()

const port = process.env.PORT || 8000   

// static files
app.use(express.static('util'))
app.use('/css', express.static(__dirname + 'util/css'))
app.use('/js', express.static(__dirname + 'util/js'))
app.use('/img', express.static(__dirname + 'util/img'))
app.use('/positivae', express.static(__dirname + 'util/positivae'))
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())

app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/view/home.html')
})
app.get('/view/blog',(req, res) =>{
    res.sendFile(__dirname + '/view/blog.html')
})
app.get('/view/anomainpage',(req, res) =>{
    res.sendFile(__dirname + '/view/anomainpage.html')
})
app.get('/view/login',(req, res) =>{
    res.sendFile(__dirname + '/view/login.html')
})
app.get('/view/signup',(req, res) =>{
    res.sendFile(__dirname + '/view/signup.html')
})
app.get('/view/food',(req, res) =>{
    res.sendFile(__dirname + '/view/blogfood.html')
})
app.get('/view/travel',(req, res) =>{
    res.sendFile(__dirname + '/view/blogTravel.html')
})
app.get('/view/tech',(req, res) =>{
    res.sendFile(__dirname + '/view/blogtech.html')
})
app.get('/view/humour',(req, res) =>{
    res.sendFile(__dirname + '/view/bloghumour.html')
})
app.get('/view/food/:postName',(req, res) =>{
    
    
    res.sendFile(__dirname + '/view/blogfoodmain.html')
})

app.get('/view/tech/:postName',(req, res) =>{
    
    
    res.sendFile(__dirname + '/view/blogtechmain.html')
})
app.get('/view/humour/:postName',(req, res) =>{
    
    
    res.sendFile(__dirname + '/view/bloghumourmain.html')
})
app.get('/view/travel/:postName',(req, res) =>{
    
    
    res.sendFile(__dirname + '/view/blogtravelmain.html')
})
app.get('/view/doctorscategory',(req, res) =>{
    res.sendFile(__dirname + '/view/Departments.html')
})
app.get('/view/doctorlist',(req, res) =>{
    res.sendFile(__dirname + '/view/doctorlist.html')
})

app.get('/view/doctorabout',(req, res) =>{
    res.sendFile(__dirname + '/view/doctorabout.html')
})
app.get('/view/reviewform',(req, res) =>{
    res.sendFile(__dirname + '/view/reviewform.html')
})
app.get('/view/drappointmentform',(req, res) =>{
    res.sendFile(__dirname + '/view/drappointmentform.html')
})
app.get('/view/blogform',(req, res) =>{
    res.sendFile(__dirname + '/view/blogform.html')
})
app.get('/view/t&co',(req, res) =>{
    res.sendFile(__dirname + '/view/t&co.html')
})
app.get('/view/donateus',(req, res) =>{
    res.sendFile(__dirname + '/view/donateus.html')
})
app.get('/view/docform',(req, res) =>{
    res.sendFile(__dirname + '/view/doctorform.html')
})
app.get('/view/meditation-cat', (req, res) => {
    res.sendFile(__dirname + '/view/meditation-cat.html')
})
app.get('/view/meditation', (req, res) => {
    res.sendFile(__dirname + '/view/meditation.html')
})
app.get('/view/meditation-profile', (req, res) => {
    res.sendFile(__dirname + '/view/meditation-profile.html')
})
app.get('/view/influencerapplication',(req, res) =>{
    res.sendFile(__dirname + '/view/influencerapplication.html')
})

app.get('/view/docdashboard',(req, res) =>{
    res.sendFile(__dirname + '/view/docdash.html')
})
app.get('/view/docprofileupdate/:postName',(req, res) =>{
    
    res.sendFile(__dirname + '/view/docprofileupdate.html')
})

app.get('/view/docappointments/:postName',(req, res) =>{
    
    
    res.sendFile(__dirname + '/view/docappoint.html')
})
app.get('/view/docreviews/:postName',(req, res) =>{
    
    
    res.sendFile(__dirname + '/view/docreviews.html')
})
app.get('/view/docprescriptions/:postName',(req, res) =>{
    
    
    res.sendFile(__dirname + '/view/docpresc.html')
})
app.get('/view/docprofile/:postName',(req, res) =>{
    
    
    res.sendFile(__dirname + '/view/docprofile.html')
})

//listen on port 3000
app.listen(port, () => console.info(`listening to port ${port}` ))
