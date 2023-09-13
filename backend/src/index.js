const express = require('express')
require('./db/mongoose')

const app = express()
const {spawn} = require('child_process');

var cors = require('cors')
const port = process.env.PORT || 9000
// var whitelist = [
//     'http://0.0.0.0:3000',
// ];
// var corsOptions = {
//     origin: function(origin, callback){
//         var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//         callback(null, originIsWhitelisted);
//     },
//     credentials: true
// };
// app.use(cors(corsOptions));


//app.use(cors)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Content-Type");
    next();
});

app.use(express.json())


//app.use(cors)

const bcrypt = require('bcryptjs')

app.use(cors({
    origin: ['localhost:3000', 'https://www.google.com']
}))


const userRouter = require('./routers/user')
const purchaseRouter = require('./routers/purchase')
app.use(userRouter)
app.use(purchaseRouter)


app.get('/recs', (req, res) => {
 
    var dataToSend;
    // spawn new child process to call the python script
   // const python = spawn('python', ['script1.py']);
    const python = spawn('python', ['recommender.py','node.js','python']);
    // collect data from script
    python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
    });
})


app.get('/recs', (req, res) => {
 
    var dataToSend;
    // spawn new child process to call the python script
   // const python = spawn('python', ['script1.py']);
    const python = spawn('python', ['recommender.py','node.js','python']);
    // collect data from script
    python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
    });
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})