//INDEX.JS PORTAL INTO OUR SERVICE

//require == importing library
const express  = require('express');
const db = require('./data/hubs-model.js')


//server creation
const server = express();

//middleware
server.use(express.json());


//What happends on a get request?
server.get('/',(req,res) => {
    //what is the datatype
    //what is the status code
    //what am I sending back
    res.send('<h2>Hellow World</h2>');
});

//What happends on a get request?
server.get('/now',(req,res) => {
    const timestamp = new Date().toISOString();
    res.send(timestamp);
});


//get/hubs

server.get('/hubs',(req,res) => {
    db.find()
    .then(hubs  => {
        res.json(hubs);

    })
    .catch(err => {
        res.status(500).json({
            err: err
        })
    })
});


//get/hubs

server.post('/hubs',(req,res) => {

    const newHub = req.body;
    db.add(newHub)
    .then(hub => {
       res.status(201).json(hub);

    })
    .catch(err => {
        res.status(500).json({
            err: err,
            message: 'failed to create a new hub'
        })
    })
});



// should be last step
server.listen(4000, () =>{

console.log('Server is running on port 4000');

})