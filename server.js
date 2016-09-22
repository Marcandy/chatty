/*jshint esversion: 6 */
const express = require('express');
const app = express();
const {json} = require('body-parser');


const port = 8989;
app.use(json());


var messages = [];

// app.get('/', function( req, res ) {
//   res.status(200).set({
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//     'X-XSS-Protection': '1; mode=block',
//     'X-Frame-Options': 'SAMEORIGIN',
//     'Content-Security-Policy': "default-src 'self' devmountain.github.io"
//   }).send(JSON.stringify(messages));
// });

app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});

app.post('/', function(req, res) {

  messages.push({
    url: req.body.url,
    username: req.body.username,
    message: req.body.message,
    time: new Date()

  });

  res.status(200).set({
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
   'X-XSS-Protection': '1; mode=block',
   'X-Frame-Options': 'SAMEORIGIN',
   'Content-Security-Policy': "default-src 'self' devmountain.github.io"
 }).send(JSON.stringify(messages));

})

app.options('/', function (req, res) {
  res.status(200).set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }).send(JSON.stringify(messages));

})

app.listen(port);
