const express = require('express')
const app = express()
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/index', function(req, resp){
  resp.render('index')
})

app.get('/about', function(req, resp){
  resp.render('about')
})

app.get('/contact', function(req, resp){
  resp.render('contact')
})

app.listen(3000)
