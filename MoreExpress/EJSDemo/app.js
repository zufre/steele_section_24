var express = require('express');
var app = express();

app.get('/', function(req, res) {

  res.render('home.js')
});

app.get('/fallinginlovewith/:thing', function(req, res) {
  var thing = req.params.thing;

  res.render('love.ejs', {thingVar: thing})
});

app.get('/posts', function(req, res) {
  var posts =  [

    {title: "Post 1", author: "James"},
    {title: "Post 2", author: "Susy"},
    {title: "Post 3", author: "Susy"}

  ];

  res.render('posts.ejs', {posts: posts})
});

app.listen(3000, process.env.IP, function(){
  console.log('server running');
});